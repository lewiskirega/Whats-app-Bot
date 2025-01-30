const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Replace with your Twilio credentials
const accountSid = 'AccountSid';
const authToken = 'AuthToken';
const client = twilio(accountSid, authToken);

// Webhook to handle incoming messages
app.post('/webhook', (req, res) => {
    const incomingMessage = req.body.Body; // The message content
    const from = req.body.From; // The sender's WhatsApp number
    const groupId = req.body.To; // The group ID (if applicable)

    console.log(`Received message: "${incomingMessage}" from: ${from}`);

    // Auto-reply logic
    let responseMessage = '';
    if (incomingMessage.toLowerCase().includes('hello')) {
        responseMessage = 'Hi there! How can I help you?';
    } else if (incomingMessage.toLowerCase().includes('help')) {
        responseMessage = 'Sure! What do you need help with?';
    } else {
        responseMessage = 'Sorry, I didn’t understand that.';
    }

    // Send the reply
    client.messages.create({
        body: responseMessage,
        from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
        to: from // Reply to the sender
    }).then(message => {
        console.log(`Reply sent: ${message.sid}`);
        res.send('Message sent!');
    }).catch(err => {
        console.error(`Error sending message: ${err}`);
        res.status(500).send('Error sending message');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});