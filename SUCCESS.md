# ✅ OTP Service - Setup Complete!

## 🎉 SUCCESS! Your OTP Service is Running

**Server Status**: ✅ RUNNING  
**URL**: http://localhost:3000/  
**Database**: ✅ Connected to MongoDB Atlas  
**Port**: 3000  

---

## ✅ What's Working

1. ✓ All dependencies installed
2. ✓ TypeScript compiled successfully
3. ✓ MongoDB Atlas connected to `otp-service` database
4. ✓ Server running on port 3000
5. ✓ API endpoints ready to use

---

## ⚠️ Gmail Configuration Still Needed

To send OTP emails, you need to configure Gmail:

### Quick Steps:

1. **Generate Gmail App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate app password (16 characters)

2. **Update .env file**
   ```env
   GMAIL_USER=akshaykhanna5684@gmail.com
   GMAIL_PASS=your-16-char-app-password
   ```

3. **Restart the server**
   - Stop current server (Ctrl+C in terminal)
   - Run: `npm run dev`

---

## 🧪 Test Your API Now

### 1. Health Check ✅
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing
```
**Result**: "Welcome to OTP service"

### 2. Generate OTP (After Gmail Setup)
```powershell
$body = @{
    email = "akshaykhanna5684@gmail.com"
    type = "numeric"
    organization = "MyApp"
    subject = "Your OTP Code"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/otp/generate" -Method Post -Body $body -ContentType "application/json"
```

### 3. Verify OTP
```powershell
$body = @{
    email = "akshaykhanna5684@gmail.com"
    otp = "123456"  # Replace with actual OTP
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/otp/verify" -Method Post -Body $body -ContentType "application/json"
```

---

## 📊 Current Configuration

```env
PORT=3000
MONGODB_URI=mongodb+srv://akshay:****@cluster0.bqj1yfq.mongodb.net/otp-service
GMAIL_USER=your-email@gmail.com  ← NEEDS UPDATE
GMAIL_PASS=your-app-password     ← NEEDS UPDATE
OTP_VALIDITY_PERIOD_MINUTES=5
OTP_SIZE=6
ALLOWED_DOMAINS=
BLOCK_KEYWORDS_RULES=spam,test,fake
```

---

## 🎯 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Health check |
| `/api/otp/generate` | POST | Generate and send OTP |
| `/api/otp/verify` | POST | Verify OTP |

---

## 📝 API Request Examples

### Generate OTP Request
```json
{
  "email": "user@example.com",
  "type": "numeric",
  "organization": "MyApp",
  "subject": "Your OTP Code"
}
```

**OTP Types**: `numeric`, `alphanumeric`, `alphabet`

### Verify OTP Request
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

---

## 🔧 Server Management

### Start Server
```bash
npm run dev          # Development mode (auto-reload)
npm start            # Production mode
```

### Stop Server
Press `Ctrl + C` in the terminal

### View Logs
```bash
Get-Content app.log -Tail 50
```

### Rebuild TypeScript
```bash
npm run build
```

---

## 📁 Project Structure

```
otp-service/
├── src/                    # TypeScript source code
│   ├── config/            # Database configuration
│   ├── controllers/       # OTP and email controllers
│   ├── middleware/        # Validation middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── utils/             # Utilities (logger, OTP generator)
│   └── index.ts           # Application entry point
├── dist/                  # Compiled JavaScript
├── node_modules/          # Dependencies
├── .env                   # Environment variables (DO NOT COMMIT)
├── app.log               # Application logs
├── package.json          # Project configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🔐 Security Checklist

- [ ] Change MongoDB password from "akshay" to something stronger
- [ ] Configure Gmail App Password
- [ ] Never commit `.env` file to git (already in `.gitignore`)
- [ ] Use environment-specific credentials for production
- [ ] Enable MongoDB Atlas IP whitelisting
- [ ] Regularly rotate passwords

---

## 🆘 Troubleshooting

### Server won't start?
```bash
# Check if port is in use
netstat -ano | findstr :3000

# Kill process if needed
taskkill /PID <process_id> /F
```

### MongoDB connection issues?
- Verify IP is whitelisted in MongoDB Atlas
- Check credentials are correct
- Test with: `node test-mongodb.js`

### Can't send emails?
- Configure Gmail App Password first
- Verify 2FA is enabled
- Check GMAIL_USER and GMAIL_PASS in `.env`

---

## 🎊 Next Steps

1. **Configure Gmail** (5 minutes)
   - See instructions above

2. **Test OTP Generation**
   - Use the API examples above

3. **Integrate with Your App**
   - Use the API endpoints in your application

4. **Deploy to Production** (Optional)
   - Consider Vercel, Heroku, or AWS
   - Update environment variables for production

---

## 📞 Resources

- **Project Repo**: https://github.com/sauravhathi/otp-service
- **MongoDB Atlas**: https://cloud.mongodb.com/
- **Gmail App Passwords**: https://myaccount.google.com/apppasswords
- **API Demo**: https://otp-service-beta.vercel.app/

---

**🚀 Your OTP Service is ready! Just add Gmail credentials and start sending OTPs!**

**Server is currently running at**: http://localhost:3000/
