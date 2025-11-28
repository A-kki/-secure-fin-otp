# OTP Service - Environment Setup Guide

## ✅ Completed Steps

1. **Dependencies Installed** ✓
   - All npm packages have been successfully installed
   - TypeScript compilation completed successfully
   - Build artifacts created in `/dist` directory

## 🔧 Required Configuration

To run the OTP service, you need to configure the following environment variables:

### Create a `.env` file in the project root with these variables:

```env
# Server Configuration
PORT=3000

# MongoDB Configuration
# You need a MongoDB instance running. Options:
# 1. Local MongoDB: mongodb://localhost:27017/otp-service
# 2. MongoDB Atlas (cloud): mongodb+srv://username:password@cluster.mongodb.net/otp-service
MONGODB_URI=mongodb://localhost:27017/otp-service

# Gmail Configuration (for sending OTP emails)
# IMPORTANT: Use App Password, not your regular Gmail password
# Generate App Password at: https://myaccount.google.com/apppasswords
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-16-character-app-password

# OTP Configuration
OTP_VALIDITY_PERIOD_MINUTES=5
OTP_SIZE=6

# Email Domain Restrictions (comma-separated, leave empty to allow all domains)
ALLOWED_DOMAINS=

# Spam Detection (comma-separated keywords to block)
BLOCK_KEYWORDS_RULES=spam,test,fake
```

## 📋 Prerequisites Checklist

### 1. MongoDB Setup
You need a MongoDB database. Choose one option:

**Option A: Local MongoDB**
- Install MongoDB Community Edition from: https://www.mongodb.com/try/download/community
- Start MongoDB service:
  ```bash
  # Windows (run as Administrator)
  net start MongoDB
  ```

**Option B: MongoDB Atlas (Cloud - Recommended)**
- Sign up at: https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- Whitelist your IP address

### 2. Gmail App Password Setup
1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Factor Authentication if not already enabled
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (no spaces)
6. Use this in your `.env` file as `GMAIL_PASS`

## 🚀 Running the Application

After setting up the `.env` file:

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Build TypeScript
```bash
npm run build
```

## 🧪 Testing the API

Once the server is running, you can test it:

### 1. Health Check
```bash
curl http://localhost:3000/
```
Expected response: "Welcome to OTP service"

### 2. Generate OTP
```bash
curl -X POST http://localhost:3000/api/otp/generate \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "type": "numeric",
    "organization": "MyApp",
    "subject": "OTP Verification"
  }'
```

### 3. Verify OTP
```bash
curl -X POST http://localhost:3000/api/otp/verify \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "otp": "123456"
  }'
```

## ❗ Common Issues

### Issue: "Failed to connect to MongoDB"
**Solution**: 
- Ensure MongoDB is running
- Check your `MONGODB_URI` is correct
- If using MongoDB Atlas, ensure your IP is whitelisted

### Issue: "Failed to send OTP"
**Solution**:
- Verify `GMAIL_USER` and `GMAIL_PASS` are correct
- Ensure you're using an App Password, not your regular password
- Check that 2FA is enabled on your Google account

### Issue: Server starts but no logs appear
**Solution**:
- Check the `app.log` file in the project root for error logs
- Ensure all environment variables are set correctly

## 📝 Next Steps

1. Create your `.env` file with the required variables
2. Set up MongoDB (local or cloud)
3. Configure Gmail App Password
4. Run `npm run dev` to start the development server
5. Test the API endpoints

## 🔗 Useful Links

- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Google App Passwords: https://myaccount.google.com/apppasswords
- Project Repository: https://github.com/sauravhathi/otp-service
- API Demo: https://otp-service-beta.vercel.app/
