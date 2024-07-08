// @ts-nocheck
const { getGroqResponse } = require('./processInput');
const { sendMessageToSlack } = require('./response');

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const slackBotToken = process.env.SLACK_BOT_TOKEN;
        const groqBearerToken = process.env.GROQ_BEARER_TOKEN;

        switch (body.type) {
            case 'url_verification':
                return {
                    statusCode: 200,
                    body: JSON.stringify({ 'challenge': body.challenge }),
                };

            case 'event_callback':
                console.log('Received event:', body.event);
                const slackEvent = body.event;

                const message = slackEvent.text;
                const channel = slackEvent.channel;

                const groqResponse = await getGroqResponse(message, groqBearerToken);
                const responseMessage = groqResponse.choices[0].message.content;

                await sendMessageToSlack(channel, responseMessage, slackBotToken);
                console.log('Processed event:', body.event);

                return {
                    statusCode: 200,
                    body: JSON.stringify({ 'message': 'Event received' }),
                };

            default:
                console.log('Unsupported event type:', body.type);
                return {
                    statusCode: 200,
                    body: JSON.stringify({ 'message': 'Unsupported event type' }),
                };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 'error': 'Internal Server Error' }),
        };
    }
};
