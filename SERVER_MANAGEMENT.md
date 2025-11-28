# 🔧 Understanding the "Port Already in Use" Error

## ❓ What's Happening?

The error **"EADDRINUSE: address already in use :::3000"** means you're trying to start a **second server** while one is already running.

### 🎯 The Good News
**Your server IS working!** The error appears because you're accidentally starting multiple instances.

---

## ✅ How to Properly Manage Your Server

### **Starting the Server**

**Option 1: Use the Helper Script (Recommended)**
```powershell
.\start-server.ps1
```
This script will:
- Check if the server is already running
- Stop old instances if needed
- Start a fresh server

**Option 2: Manual Start**
```powershell
npm run dev
```

### **Checking if Server is Running**

```powershell
# Check if port 3000 is in use
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

# Or test the endpoint
Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing
```

If you get "Welcome to OTP service" → **Server is running! ✅**

### **Stopping the Server**

**Option 1: In the terminal where it's running**
- Press `Ctrl + C`

**Option 2: Stop all Node processes**
```powershell
Stop-Process -Name node -Force
```

---

## 🚫 Common Mistakes to Avoid

### ❌ **DON'T DO THIS:**
- Running `npm run dev` multiple times in different terminals
- Starting the server when it's already running
- Forgetting to stop the old server before starting a new one

### ✅ **DO THIS:**
- Check if server is running before starting it
- Use only ONE terminal for the server
- Stop the server with `Ctrl+C` before restarting

---

## 🔍 Troubleshooting Steps

### Step 1: Check Current Status
```powershell
# See all running Node processes
Get-Process -Name node -ErrorAction SilentlyContinue

# Check if port 3000 is in use
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
```

### Step 2: Stop All Servers
```powershell
Stop-Process -Name node -Force
```

### Step 3: Wait a Moment
```powershell
Start-Sleep -Seconds 2
```

### Step 4: Start Fresh
```powershell
npm run dev
```

---

## 📊 Understanding the Server Lifecycle

```
1. START SERVER
   ↓
   npm run dev
   ↓
2. SERVER RUNNING ✅
   ↓
   Listening on port 3000
   ↓
3. STOP SERVER
   ↓
   Ctrl+C or Stop-Process
   ↓
4. SERVER STOPPED
   ↓
   Port 3000 is free
   ↓
   (Back to step 1 if needed)
```

---

## 🎯 Quick Reference Commands

| Task | Command |
|------|---------|
| **Start server** | `npm run dev` or `.\start-server.ps1` |
| **Stop server** | `Ctrl+C` or `Stop-Process -Name node -Force` |
| **Check if running** | `Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing` |
| **View logs** | `Get-Content app.log -Tail 20` |
| **Check port 3000** | `Get-NetTCPConnection -LocalPort 3000` |
| **Kill all Node** | `Stop-Process -Name node -Force` |

---

## 💡 Pro Tips

1. **Use ONE terminal** for running the server
2. **Keep that terminal visible** so you know the server is running
3. **Before starting**, always check if it's already running
4. **To restart**, stop first (Ctrl+C), then start again
5. **Use the helper script** (`start-server.ps1`) to avoid conflicts

---

## 🎓 What You Need to Know

### When you run `npm run dev`:
- It starts a development server
- The server listens on port 3000
- It stays running until you stop it
- You can only have ONE server on port 3000

### The error appears when:
- You try to start a second server
- Port 3000 is already occupied
- You forgot to stop the previous instance

### The solution:
- **Stop all instances** first
- **Start only ONE** new instance
- **Keep track** of which terminal is running the server

---

## ✅ Current Status Check

Run this to see your current status:

```powershell
Write-Host "Checking server status..." -ForegroundColor Cyan
Write-Host ""

# Check Node processes
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "✅ Node processes running: $($nodeProcesses.Count)" -ForegroundColor Green
} else {
    Write-Host "❌ No Node processes running" -ForegroundColor Red
}

# Check port 3000
$port = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port) {
    Write-Host "✅ Port 3000 is in use (server is running)" -ForegroundColor Green
} else {
    Write-Host "❌ Port 3000 is free (server is NOT running)" -ForegroundColor Red
}

# Test endpoint
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing -TimeoutSec 2
    Write-Host "✅ Server responding: $($response.Content)" -ForegroundColor Green
} catch {
    Write-Host "❌ Server not responding" -ForegroundColor Red
}
```

---

**Remember: The error doesn't mean something is broken - it means the server is already running! 🎉**
