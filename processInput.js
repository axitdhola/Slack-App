const axios = require('axios');

async function getGroqResponse(userMessage, token) {
    const url = 'https://api.groq.com/openai/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const data = {
        "messages": [
            {
                "role": "user",
                "content": "Provide a concise and accurate answer to the following query: " + userMessage
            }
        ],
        "model": "llama3-8b-8192"
    };

    try {
        console.log('Sending message to Groq API:', data);
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Error sending message to Groq API:', error);
        throw error;
    }
}

module.exports = { getGroqResponse };
