**NOTE: This is Step 3.1. For final application code, see [here](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/main).**

## DynamoDB + Lambda Workshop

This repository includes the code showing how to use DynamoDB and Lambda in a serverless application. In doing so, it shows two main patterns:

- Using DynamoDB as a primary database by writing to and reading from a DynamoDB table in your Lambda function;
- Reacting to events in your DynamoDB table using DynamoDB Streams.

To demonstrate these patterns, we will build a simple page view tracking application. We will add two endpoints:

- `/tag/{tag}` will increment the count for the given tag name
- `/counts/{tag}` will display the total count for a given tag name

Additionally, we will use DynamoDB Streams to maintain an overall count across all tags.

We will be using the AWS Serverless Application Model (AWS SAM) to build and deploy our serverless application.

If you want to see the code as it exists at various steps in the workshop, check out the following branches:

- Writing your first Lambda function ([1.1](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/1.1))
- Configuring a function with infrastructure-as-code in AWS SAM ([1.2](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/1.2))
- Provisioning a DynamoDB table ([2.1](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/2.1))
- Connecting to DynamoDB in your Lambda function ([2.2](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/2.2))
- Writing a function to save tag visits in Lambda + DynamoDB ([3.1](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/3.1))
- Writing a function to display tag visit counts with Lambda + DynamoDB ([3.2](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/3.2))
- Enabling DynamoDB Streams ([4.1](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/4.1))
- Processing DynamoDB Streams with AWS Lambda ([4.2](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/4.2))
- Final application ([main](https://github.com/alexdebrie/lambda-dynamodb-workshop/tree/main))
