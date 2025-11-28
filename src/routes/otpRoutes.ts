import { Router } from 'express';
import OtpController from '../controllers/otpController';
import SendMailController from '../controllers/sendMailController';
import logger from '../utils/logger';
import { validateSpamMiddleware } from '../middleware';

const router = Router();
const otpController = new OtpController();
const sendMailController = new SendMailController();

/**
 * Route to generate OTP and send it via email
 */
router.post('/otp/generate', validateSpamMiddleware, async (req, res) => {
  try {
    const { email, type = 'numeric', organization = 'Team Secure Fin', subject = 'One-Time Password (OTP)' } = req.body;

    const otp = await otpController.generateOtp(email, type);

    // Check if Gmail is configured
    const gmailUser = process.env.GMAIL_USER;
    const isGmailConfigured = gmailUser && !gmailUser.includes('your-email') && gmailUser.includes('@');

    let message = 'OTP is generated and sent to your email';
    let emailStatus = 'sent';

    if (isGmailConfigured) {
      try {
        await sendMailController.sendMail(email, otp, organization, subject);
      } catch (mailError) {
        logger.error('Failed to send email', (mailError as Error).message);
        message = `OTP generated but email failed. Your OTP is: ${otp}`;
        emailStatus = 'failed';
      }
    } else {
      logger.warn('Gmail not configured, skipping email send');
      message = `OTP generated (Email skipped - Gmail not configured). Your OTP is: ${otp}`;
      emailStatus = 'skipped';
    }

    res.status(200).json({
      message,
      emailStatus,
      // In a real app we wouldn't return the OTP, but for testing/fallback it's helpful
      debugOtp: otp
    });
  } catch (error) {
    logger.error('Failed to generate OTP', (error as Error).message);
    res.status(400).json({ error: (error as Error).message });
  }
});

/**
 * Route to verify OTP
 */
router.post('/otp/verify', async (req, res) => {
  try {
    const { email, otp } = req.body;
    await otpController.verifyOtp(email, otp?.toString());

    res.status(200).json({ message: 'OTP is verified' });
  } catch (error) {
    logger.error('Failed to verify OTP', (error as Error).message);
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;