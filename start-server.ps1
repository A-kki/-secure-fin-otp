# OTP Service - Server Management Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   OTP Service - Server Manager" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if port 3000 is already in use
$portInUse = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($portInUse) {
    Write-Host "⚠️  Port 3000 is already in use!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Options:" -ForegroundColor White
    Write-Host "1. Stop all Node processes and restart server" -ForegroundColor White
    Write-Host "2. Exit (server is already running)" -ForegroundColor White
    Write-Host ""
    $choice = Read-Host "Enter your choice (1 or 2)"
    
    if ($choice -eq "1") {
        Write-Host ""
        Write-Host "🛑 Stopping all Node processes..." -ForegroundColor Yellow
        Stop-Process -Name node -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
        Write-Host "✅ All Node processes stopped" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "✅ Server is already running at http://localhost:3000/" -ForegroundColor Green
        Write-Host ""
        Write-Host "To test: Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing" -ForegroundColor Cyan
        exit
    }
}

Write-Host ""
Write-Host "🚀 Starting OTP Service..." -ForegroundColor Green
Write-Host ""
Write-Host "Server will run at: http://localhost:3000/" -ForegroundColor Cyan
Write-Host ""
Write-Host "To stop the server: Press Ctrl+C" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the development server
npm run dev
