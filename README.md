
## DynamoDB + Lambda Workshop

This repository includes the code showing how to use DynamoDB and Lambda in a serverless application. In doing so, it shows two main patterns:

- Using DynamoDB as a primary database by writing to and reading from a DynamoDB table in your Lambda function;
- Reacting to events in your DynamoDB table using DynamoDB Streams.

To demonstrate these patterns, we will build a simple page view tracking application. We will add two endpoints:

- `/tag/{tag}` will increment the count for the given tag name
- `/counts/{tag}` will display the total count for a given tag name

Additionally, we will use DynamoDB Streams to maintain an overall count across all tags.

We will be using the AWS Serverless Application Model (AWS SAM) to build and deploy our serverless application.