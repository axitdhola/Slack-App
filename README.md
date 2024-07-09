# Slack APP 

This Slack app allows users to ask any question and receive an answer directly within Slack.

## Application Flow

- User Question: A user asks a question in Slack, triggering an event.
- Slack Request: Slack sends a POST request to AWS API Gateway.
- API Gateway Invocation: The API Gateway invokes an AWS Lambda function.
- Processing and Response: The Lambda function processes the question and returns a response to Slack.

![image](https://github.com/axitdhola/Slack-App/assets/59970859/c812479b-b63d-4bb5-ac64-84d4cb2dc42e)
