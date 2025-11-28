import Otp from '../models/otpModel';
import generateOTP from '../utils/generateOTP';
import logger from '../utils/logger';
import mongoose, { Types } from 'mongoose';

const validityPeriodMs = parseInt(process.env.OTP_VALIDITY_PERIOD_MINUTES || '5') * 60 * 1000;
const OTP_SIZE = parseInt(process.env.OTP_SIZE || '6');
const MAX_ATTEMPTS = 3;

// In-memory store for fallback
interface InMemoryOtp {
  email: string;
  otp: string;
  createdAt: number;
  attempts: number;
}
const memoryStore = new Map<string, InMemoryOtp>();

class OtpController {
  private isDbConnected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  async generateOtp(email: string, type: string): Promise<string> {
    try {
      const now = Date.now();

      if (this.isDbConnected()) {
        const existingOtp = await Otp.findOneAndUpdate(
          { email, createdAt: { $gte: new Date(now - validityPeriodMs) } },
          { $inc: { attempts: 1 } },
          { new: true }
        ).lean();

        if (existingOtp) {
          if (existingOtp.attempts > MAX_ATTEMPTS) {
            logger.info(`Max attempts reached for ${email}`);
            throw new Error('Maximum attempts reached. Try again later.');
          }
          return existingOtp.otp;
        }

        const otp = generateOTP(OTP_SIZE, type);
        await Otp.create({ id: new Types.ObjectId(), email, otp });
        return otp;
      } else {
        // Fallback to memory store
        logger.warn('Using in-memory store for OTP generation');

        // Clean up expired OTPs for this email
        const existing = memoryStore.get(email);
        if (existing) {
          if (now - existing.createdAt < validityPeriodMs) {
            if (existing.attempts >= MAX_ATTEMPTS) {
              throw new Error('Maximum attempts reached. Try again later.');
            }
            existing.attempts++;
            memoryStore.set(email, existing);
            return existing.otp;
          }
        }

        const otp = generateOTP(OTP_SIZE, type);
        memoryStore.set(email, {
          email,
          otp,
          createdAt: now,
          attempts: 1
        });
        return otp;
      }
    } catch (error: any) {
      logger.error('OTP generation failed:', error.message);
      throw new Error(error.message);
    }
  }

  async verifyOtp(email: string, otp: string): Promise<boolean> {
    try {
      if (!otp || otp.length !== OTP_SIZE) {
        throw new Error('Invalid OTP');
      }

      if (this.isDbConnected()) {
        const otpDocument = await Otp.findOneAndDelete({
          email,
          otp,
          createdAt: { $gte: new Date(Date.now() - validityPeriodMs) }
        }).select('_id').lean();

        if (!otpDocument) {
          throw new Error('Invalid OTP');
        }
        return true;
      } else {
        // Fallback to memory store
        logger.warn('Using in-memory store for OTP verification');

        const existing = memoryStore.get(email);
        if (!existing) {
          throw new Error('Invalid OTP');
        }

        if (Date.now() - existing.createdAt > validityPeriodMs) {
          memoryStore.delete(email);
          throw new Error('OTP expired');
        }

        if (existing.otp !== otp) {
          throw new Error('Invalid OTP');
        }

        // Success - remove from store
        memoryStore.delete(email);
        return true;
      }
    } catch (error: any) {
      logger.error('OTP verification failed:', error.message);
      throw new Error(error.message);
    }
  }
}

export default OtpController;
