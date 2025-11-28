# 🚀 Next Steps to Run Your OTP Service

## ✅ Already Completed

1. ✓ Dependencies installed (`npm install`)
2. ✓ TypeScript compiled (`npm run build`)
3. ✓ `.env` file created
4. ✓ MongoDB Atlas connection configured

## 📧 Gmail Configuration Required

You need to set up Gmail to send OTP emails. Follow these steps:

### Step 1: Enable 2-Factor Authentication
1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Windows Computer" as the device
4. Click "Generate"
5. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### Step 3: Update .env File
Open the `.env` file and update these two lines:

```env
GMAIL_USER=akshaykhanna5684@gmail.com
GMAIL_PASS=your-16-character-app-password-here
```

**Replace** `your-16-character-app-password-here` with the password you just generated.

## 🏃 Running the Application

After updating Gmail credentials, run:

```bash
# Development mode (recommended for testing)
npm run dev
```

Or for production:

```bash
npm start
```

## 🧪 Test the API

Once the server is running, test it:

### 1. Check if server is running
Open browser: http://localhost:3000/

### 2. Generate an OTP
```bash
curl -X POST http://localhost:3000/api/otp/generate -H "Content-Type: application/json" -d "{\"email\": \"akshaykhanna5684@gmail.com\", \"type\": \"numeric\", \"organization\": \"MyApp\", \"subject\": \"Your OTP Code\"}"
```

### 3. Check your email
You should receive an OTP at akshaykhanna5684@gmail.com

### 4. Verify the OTP
```bash
curl -X POST http://localhost:3000/api/otp/verify -H "Content-Type: application/json" -d "{\"email\": \"akshaykhanna5684@gmail.com\", \"otp\": \"123456\"}"
```

Replace `123456` with the actual OTP you received.

## ⚠️ Security Reminder

**IMPORTANT**: Your MongoDB credentials are currently exposed. After setup:

1. Change your MongoDB Atlas password:
   - Go to: https://cloud.mongodb.com/
   - Navigate to Database Access
   - Edit user and set a new password
   
2. Update the `.env` file with the new password

3. Never commit the `.env` file to git (it's already in `.gitignore`)

## 📝 Current Configuration

- **MongoDB**: Connected to MongoDB Atlas (Cluster0)
- **Database**: otp-service
- **Port**: 3000
- **OTP Validity**: 5 minutes
- **OTP Length**: 6 digits

## 🆘 Troubleshooting

If you encounter errors:

1. **MongoDB Connection Error**: 
   - Check if your IP is whitelisted in MongoDB Atlas
   - Go to: Network Access → Add IP Address → Add Current IP

2. **Gmail Error**:
   - Ensure 2FA is enabled
   - Use App Password, not regular password
   - Check that GMAIL_USER and GMAIL_PASS are correct

3. **Port Already in Use**:
   - Change PORT in `.env` to another port (e.g., 3001)

## 📞 Need Help?

Check the full setup guide: `SETUP_GUIDE.md`
