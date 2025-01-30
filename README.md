# WhatsApp Auto-Reply Bot 🤖

A Node.js bot that auto-replies to messages in WhatsApp groups or individual chats using the Twilio API. Perfect for automated customer support, reminders, or FAQs.

![Twilio + Node.js + WhatsApp](https://img.shields.io/badge/Twilio-Node.js-FF6B6B?style=for-the-badge&logo=whatsapp)

## Features ✨
- Auto-reply to keywords (e.g., "hello", "help").
- Works in WhatsApp groups and individual chats.
- Easy to customize responses.
- Local testing with Ngrok or deployment to the cloud.

## Prerequisites 📋
- [Node.js](https://nodejs.org/) (v14+)
- [Twilio Account](https://www.twilio.com/) (Free tier)
- [Ngrok](https://ngrok.com/) (For local testing)
- Ubuntu/Linux (Recommended) or macOS/Windows

## Installation 🛠️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lewiskirega/Whats-app-Bot.git

2. **Install dependencies**:
    ```bash
    npm install
3. **Set up environment variables**:

    -Create a .env file:
    ```bash
    touch .env
  -Add your Twilio credentials and Ngrok token:

   ``env

    TWILIO_ACCOUNT_SID=your_account_sid
    TWILIO_AUTH_TOKEN=your_auth_token
    TWILIO_PHONE_NUMBER=whatsapp:+14155238886  # Twilio sandbox number
    NGROK_AUTHTOKEN=your_ngrok_token

Here’s a **copy-paste-friendly version** of the key sections for your GitHub README. Just copy the Markdown below and paste it into your repository:

---

### **Configuration** ⚙️

1. **Twilio Setup**:
   - Sign up for a [Twilio Account](https://www.twilio.com/).
   - Go to the [WhatsApp Sandbox](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn) and follow the setup.
   - Copy your **Account SID** and **Auth Token** into your `.env` file:
     ```env
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     TWILIO_PHONE_NUMBER=whatsapp:+14155238886
     ```

2. **Ngrok Authentication**:
   ```bash
   ngrok config add-authtoken <your_ngrok_token>
   ```

---

### **Usage** 🚀

1. **Run the Bot Locally**:
   ```bash
   node index.js
   ```
   - Server starts at `http://localhost:3000`.

2. **Expose the Server**:
   ```bash
   ngrok http 3000
   ```
   - Copy the Ngrok URL (e.g., `https://abc123.ngrok.io`).

3. **Set Twilio Webhook**:
   - In your [Twilio Console](https://console.twilio.com/), navigate to **Programmable Messaging → Settings → WhatsApp Sandbox**.
   - Set the **Webhook URL** to `https://abc123.ngrok.io/webhook`.

4. **Test the Bot**:
   - Send a WhatsApp message (e.g., "hello") to your Twilio sandbox number.
   - The bot will reply instantly!

---

### **Customization** 🎨

Modify the auto-reply logic in `index.js`:
```javascript
// Example: Add custom responses
if (incomingMessage.toLowerCase().includes('hours')) {
    responseMessage = 'We’re open from 9 AM to 5 PM daily!';
} else if (incomingMessage.includes('contact')) {
    responseMessage = 'Email us at support@example.com.';
}
```

---

### **Deployment** ☁️

**Deploy to Heroku**:
1. Create a `Procfile`:
   ```bash
   echo "web: node index.js" > Procfile
   ```
2. Commit and push to Heroku:
   ```bash
   heroku create
   git push heroku main
   ```
3. Update the Twilio webhook to your Heroku app URL:
   ```
   https://your-app-name.herokuapp.com/webhook
   ```

---

### **Troubleshooting** 🔧

| Issue                          | Solution                                  |
|--------------------------------|-------------------------------------------|
| **Ngrok connection fails**     | Update Ngrok: `ngrok update`              |
| **Twilio webhook errors**      | Verify the URL in the Twilio Console.     |
| **Bot not responding**         | Check server logs with `node index.js`.   |
| **Environment variables missing** | Ensure `.env` file exists with correct values. |

---

Copy these sections directly into your GitHub README! Let me know if you need tweaks. 😊
