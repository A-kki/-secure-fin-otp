# 🔧 Gmail Configuration Required!

## ❌ Why OTP Failed to Send

The error **"Failed to send OTP"** occurs because Gmail credentials are not configured.

Your current `.env` file has placeholder values:
```env
GMAIL_USER=your-email@gmail.com  ← This is a placeholder!
GMAIL_PASS=your-app-password     ← This is a placeholder!
```

---

## ✅ How to Fix It

### Step 1: Enable 2-Factor Authentication (2FA)

1. Go to: https://myaccount.google.com/security
2. Scroll to "2-Step Verification"
3. Click "Get Started" and follow the setup
4. **This is required** to generate App Passwords

### Step 2: Generate Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. Select:
   - **App**: Mail
   - **Device**: Windows Computer (or Other)
4. Click **"Generate"**
5. You'll see a 16-character password like: `abcd efgh ijkl mnop`
6. **Copy this password** (remove spaces when pasting)

### Step 3: Update Your `.env` File

Open the `.env` file and update these lines:

```env
PORT=3000
MONGODB_URI=mongodb+srv://akshay:akshay@cluster0.bqj1yfq.mongodb.net/otp-service?retryWrites=true&w=majority&appName=Cluster0
GMAIL_USER=akshaykhanna5684@gmail.com
GMAIL_PASS=abcdefghijklmnop
OTP_VALIDITY_PERIOD_MINUTES=5
OTP_SIZE=6
ALLOWED_DOMAINS=
BLOCK_KEYWORDS_RULES=spam,test,fake
```

**Replace**:
- `akshaykhanna5684@gmail.com` with your actual Gmail address
- `abcdefghijklmnop` with your 16-character App Password (no spaces!)

### Step 4: Restart the Server

1. Go to the terminal running `npm run dev`
2. Press `Ctrl + C` to stop the server
3. Run `npm run dev` again to restart

### Step 5: Test Again!

1. Go to http://localhost:3000/
2. Enter an email address
3. Click "Send OTP"
4. Check your email inbox!

---

## 🎯 Quick Command to Update .env

You can use this PowerShell command to update your `.env` file:

```powershell
@"
PORT=3000
MONGODB_URI=mongodb+srv://akshay:akshay@cluster0.bqj1yfq.mongodb.net/otp-service?retryWrites=true&w=majority&appName=Cluster0
GMAIL_USER=your-actual-email@gmail.com
GMAIL_PASS=your-16-char-app-password
OTP_VALIDITY_PERIOD_MINUTES=5
OTP_SIZE=6
ALLOWED_DOMAINS=
BLOCK_KEYWORDS_RULES=spam,test,fake
"@ | Out-File -FilePath ".env" -Encoding utf8
```

**Remember to replace**:
- `your-actual-email@gmail.com` with your Gmail
- `your-16-char-app-password` with your App Password

---

## 📝 Example

If your Gmail is `john@gmail.com` and App Password is `abcd efgh ijkl mnop`:

```env
GMAIL_USER=john@gmail.com
GMAIL_PASS=abcdefghijklmnop
```

**Note**: Remove spaces from the App Password!

---

## ⚠️ Common Mistakes

❌ **Don't use your regular Gmail password**  
✅ Use the 16-character App Password

❌ **Don't include spaces in the App Password**  
✅ Remove all spaces: `abcdefghijklmnop`

❌ **Don't forget to restart the server**  
✅ Press Ctrl+C, then run `npm run dev`

---

## 🔍 Troubleshooting

### "Invalid login" error
- Make sure you're using App Password, not regular password
- Verify 2FA is enabled on your Google account

### "App Passwords" option not available
- Enable 2-Factor Authentication first
- Wait a few minutes after enabling 2FA

### Still not working?
- Check if Gmail address is correct
- Verify App Password has no spaces
- Make sure server was restarted after updating `.env`

---

## 🎯 Checklist

- [ ] 2FA enabled on Google account
- [ ] App Password generated
- [ ] `.env` file updated with real Gmail
- [ ] `.env` file updated with App Password (no spaces)
- [ ] Server restarted (Ctrl+C, then `npm run dev`)
- [ ] Tested OTP generation in dashboard

---

**After completing these steps, your OTP emails will work! 🎉**

**Get your App Password here**: https://myaccount.google.com/apppasswords
