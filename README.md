# SecureFin OTP Service

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-FF5722)

SecureFin is a robust Node.js service for generating and verifying One-Time Passwords (OTP) via email. It provides a secure layer for your applications, enabling 2FA or passwordless login with ease.

## 🚀 Features

- **Flexible OTPs**: Generate numeric, alphanumeric, or alphabet-based codes.
- **Email Delivery**: Seamlessly send OTPs via email.
- **Secure Verification**: Validate user OTPs instantly.
- **Spam Protection**: Built-in spam detection and rate limiting.
- **Customizable**: Configure OTP length, validity period, and more.

## 🛠️ Quick Start

### Prerequisites

- Node.js & npm
- MongoDB (Local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/A-kki/-secure-fin-otp.git
   cd otp-service
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/otp-service
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   ```

4. **Start the Server**
   ```bash
   npm run dev
   ```

## 📖 API Usage

### Generate OTP
**POST** `/api/otp/generate`

```json
{
  "email": "user@example.com",
  "type": "numeric",
  "organization": "SecureFin"
}
```

### Verify OTP
**POST** `/api/otp/verify`

```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

## ⚙️ Configuration

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `MONGODB_URI` | MongoDB connection string |
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_PASS` | Gmail App Password |
| `OTP_VALIDITY_PERIOD_MINUTES` | OTP expiry time (minutes) |

## 📄 License

This project is licensed under the MIT License.
