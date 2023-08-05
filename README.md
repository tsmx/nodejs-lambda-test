# Creating an AWS Lambda function with Node.js

> Tutorial for creating an AWS [Lambda](https://aws.amazon.com/de/lambda/) function in Node.js (ESM) and deploying it with pure code upload or a Docker-image using the AWS CLI.

## Prerequisites

To follow along the tutorial you'll need up & running...
- Node.js >= v14, version 18 LTS or higher recommended
- AWS CLI v2, see the [getting started guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Docker, v20.10 was used here

## The Lambda function

The function itself is defined in `index.js` and called [handler](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) in the AWS Lambda terminology..

```js
export const handler = async (event, context) => {
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  return { info: 'Hello from AWS Lambda!' };
};
```

As per definition, any Lambda function will receive an `event` which is a JSON object passed by the invoker and a `context` object passed by Lambda itself. See here for details about the [context](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html).

**More information coming soon...**