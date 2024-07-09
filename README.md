# Slack APP 

This Slack app allows users to ask any question and receive an answer directly within Slack.

## Application Flow

- User Question: A user asks a question in Slack, triggering an event.
- Slack Request: Slack sends a POST request to AWS API Gateway.
- API Gateway Invocation: The API Gateway invokes an AWS Lambda function.
- Processing and Response: The Lambda function processes the question and returns a response to Slack.