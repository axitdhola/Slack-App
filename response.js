const axios = require('axios');

async function sendMessageToSlack(channel, message, token) {
    const url = 'https://slack.com/api/chat.postMessage';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const data = {
        channel: channel,
        text: message,
    };

    try {
        console.log('Sending message to Slack:', data);
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Error sending message to Slack:', error);
        throw error;
    }
}

module.exports = { sendMessageToSlack };
