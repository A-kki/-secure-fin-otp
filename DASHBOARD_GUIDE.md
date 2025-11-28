# 🎨 OTP Service - Web Dashboard Guide

## 🎉 Your Beautiful UI is Ready!

I've created a stunning web dashboard for you to easily test your OTP service!

---

## 🌐 Access the Dashboard

**URL**: http://localhost:3000/

The dashboard is now live and accessible in your browser!

---

## ✨ Features

### 📧 Generate OTP Section
- **Email Address**: Enter the email where you want to receive the OTP
- **OTP Type**: Choose between:
  - Numeric (e.g., 123456)
  - Alphanumeric (e.g., A1B2C3)
  - Alphabet (e.g., ABCDEF)
- **Organization Name**: Customize the sender name
- **Email Subject**: Customize the email subject line

### ✅ Verify OTP Section
- **Email Address**: Enter the same email you used to generate OTP
- **OTP Code**: Enter the 6-digit code you received

### 🟢 Server Status Indicator
- **Green dot**: Server is online and ready
- **Red dot**: Server is offline

---

## 🧪 How to Test

### Step 1: Generate an OTP
1. Open http://localhost:3000/ in your browser
2. In the "Generate OTP" section:
   - Enter your email address (e.g., `akshaykhanna5684@gmail.com`)
   - Select OTP type (default: Numeric)
   - Keep organization as "MyApp" or change it
   - Click **"Send OTP"**

### Step 2: Check Your Email
- Check your email inbox
- Look for an email from your configured Gmail
- You should see a beautifully formatted email with your OTP code

### Step 3: Verify the OTP
1. In the "Verify OTP" section:
   - Enter the same email address
   - Enter the OTP code from your email
   - Click **"Verify OTP"**

### Step 4: See the Results
- ✅ **Green box**: Success!
- ❌ **Red box**: Error (check the message for details)

---

## 🎨 Dashboard Features

### Beautiful Design
- Modern purple gradient background
- Smooth animations and transitions
- Responsive design (works on mobile too!)
- Real-time server status checking
- Loading spinners during API calls
- Color-coded success/error messages

### User-Friendly
- Auto-fills email in verify form after generating OTP
- Clear error messages
- Visual feedback for all actions
- Hover effects on buttons and cards

---

## ⚠️ Before You Can Send Emails

**IMPORTANT**: You need to configure Gmail first!

### Quick Gmail Setup:

1. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate a 16-character password

2. **Update `.env` file**
   ```env
   GMAIL_USER=akshaykhanna5684@gmail.com
   GMAIL_PASS=your-16-char-app-password
   ```

3. **Restart the server**
   - Press `Ctrl+C` in the terminal
   - Run: `npm run dev`

4. **Test the dashboard**
   - Go to http://localhost:3000/
   - Try sending an OTP!

---

## 🔍 Troubleshooting

### Dashboard shows "Server is offline"
- Make sure `npm run dev` is running
- Check if port 3000 is available
- Refresh the page

### "Failed to send OTP" error
- Configure Gmail credentials in `.env`
- Make sure Gmail App Password is correct
- Check that 2FA is enabled on your Google account

### OTP not received
- Check spam/junk folder
- Verify email address is correct
- Check server logs: `Get-Content app.log -Tail 20`

### "Connection Error"
- Server might not be running
- Check if `npm run dev` is active
- Verify port 3000 is not blocked by firewall

---

## 📱 Mobile Friendly

The dashboard is fully responsive! You can test it on:
- Desktop browsers
- Tablets
- Mobile phones

---

## 🎯 Quick Test Checklist

- [ ] Server is running (`npm run dev`)
- [ ] Gmail is configured in `.env`
- [ ] Dashboard opens at http://localhost:3000/
- [ ] Server status shows green "online" indicator
- [ ] Can enter email and generate OTP
- [ ] Receive email with OTP code
- [ ] Can verify OTP successfully
- [ ] Success/error messages display correctly

---

## 🚀 What's Next?

1. **Configure Gmail** (if not done yet)
2. **Test OTP generation** with your email
3. **Verify the OTP** works correctly
4. **Integrate with your app** using the API endpoints
5. **Deploy to production** when ready

---

## 📊 API Endpoints (for integration)

The dashboard uses these endpoints:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `http://localhost:3000/` | GET | Dashboard UI |
| `http://localhost:3000/api/otp/generate` | POST | Generate OTP |
| `http://localhost:3000/api/otp/verify` | POST | Verify OTP |

---

## 🎨 Customization

Want to customize the dashboard?

**File location**: `a:\project\otp-service\public\index.html`

You can modify:
- Colors and gradients
- Form fields
- Text and labels
- Styling and animations

---

**Enjoy your beautiful OTP testing dashboard! 🎉**

**Access it now at**: http://localhost:3000/
