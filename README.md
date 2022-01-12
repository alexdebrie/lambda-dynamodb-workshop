_For a written, step-by-step guide to the code in this repository, use the [workshop guide here](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Virtual-Workshop-DynamoDB-Lambda.pdf)._
_Prefer video? Check out [this recording](https://www.youtube.com/watch?v=SKmHrhUR9oY&ab_channel=AWSOnlineTechTalks) to see a live demostration of this workshop along with slides with background content on DynamoDB._

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

## Overview

In this first module, you will deploy a simple serverless application. In doing so, you will learn about key serverless services, such as AWS Lambda and AWS API Gateway, as well as how and why to use infrastructure-as-code to manage your serverless applications.

AWS Lambda is a serverless compute service that lets you run code without managing servers. To use AWS Lambda, you upload your code as a ZIP file or container image. This code is called a "function", and you configure your function to be triggered on a particular event, such as an HTTP request, an SQS queue message, or many other integrations. When that event occurs, AWS Lambda will manage the execution of your code to handle the event.

AWS API Gateway is a fully managed service for building HTTP APIs for your applications. You can use API Gateway in connection with Lambda to connect an HTTP endpoint to your Lambda function. By combining API Gateway and Lambda, you can build scalable, performant HTTP APIs without managing servers, dealing with auto-scaling, or pre-provisioning capacity.

In building serverless applications, you often will be coordinating multiple different AWS services, like Lambda and API Gateway. To maintain the resources in your application, you should use an infrastructure-as-code tool. Infrastructure-as-code tools define and manage your application infrastructure in a codified format. You can check your infrastructure definition into your source control and deploy it using the same CI/CD processes as your application code. In this way, you have a trackable, repeatable process for managing your infrastructure, rather than one-off workflows such as creating infrastructure via the AWS console UI or running ad-hoc CLI commands.

The AWS Serverless Application Model (AWS SAM) is a popular infrastructure-as-code tool for building serverless applications. It is built on top of AWS CloudFormation, a general-purpose infrastructure-as-code tool. AWS SAM has serverless-specific primitives that ease the burden of building serverless applications using infrastructure-as-code. You will use AWS SAM in this tutorial to build your serverless application.
Before you begin
You should have the AWS SAM CLI installed on your machine before beginning this tutorial. For more information, see the reference material on installing the AWS SAM CLI.

Additionally, you should have your environment configured with AWS credentials. You can see how to do so in the reference material on setting up AWS credentials.
