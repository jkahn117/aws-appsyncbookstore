# aws-appsync-bookstore

The AWS AppSync Bookstore is an _experimental_ [AWS Amplify](https://aws.amazon.com/amplify/) project built as part of [MOB318 - "AWS AppSync does that: Support for alternative data sources"](https://d1.awsstatic.com/events/reinvent/2019/REPEAT_2_AWS_AppSync_does_that_Support_for_alternative_data_sources_MOB318-R2.pdf) at re:Invent 2019. The intention of the project is to demonstrate approaches to integrating [AWS AppSync](https://aws.amazon.com/appsync/) with alternative data sources such as HTTP endpoints, Amazon ElastiCache, and AWS Secrets Manager.

This project makes use of the [AWS Amplify CLI](https://github.com/aws-amplify/amplify-cli), making use of various escape hooks to add support for AWS resources such as VPC that are supported directly by Amplify.

## Getting Started

Before you deploy, you will need to install the [AWS Amplify CLI](https://github.com/aws-amplify/amplify-cli) as well as [Node.js](https://nodejs.org/en/download/). We suggest using an AWS Account for which you have Administrator access configured.

### Deployment

*Note: these instructions may need to be refined*

To deploy the AWS AppSync Bookstore:

1. Fork this project, noting the URL of the newly created repository (`FORK_GITHUB_URL`).
2. Create an empty directory on your desktop / development environment.
3. Within the newly created directly, intialize the project `amplify init --app <FORK_GITHUB_URL>`.
4. Choose to create a new environment, for example `dev`.

Next, we will create a basic catalog of books using the [New York Times Book API](https://developer.nytimes.com/docs/books-product/1/overview). You will need to create an NYT Dev API Key:

1. Navigate to https://developer.nytimes.com/get-started and create a new account.
2. Create a new app titled "appsync-bookstore".
3. Enable the "Books API".
4. Generate an App ID and key, making note of both.

Open the file `amplify/backend/function/setup/setup-cloudformation-template.json`. Search for the phrase `INSERT_API_KEY_HERE` and replace the value (keeping the quotes) with the newly created API key.

Next, navigate to the `src` directory for each function in `amplify/backend/function` and run `npm install`. There are a total of five functions for which this is currently required.

Use Amplify to deploy the infrastructure, `amplify push`. Note that this may take 30 minutes or more to complete.

We can use Amplify to invoke our setup Lambda function: 

``` bash
amplify function invoke setup
```

Responses are as follows:

* Provide the name of the script file that contains your handler function: **index.js**
* Provide the name of the handler function to invoke: **handler**

Once finished, you can start the local React development server: `yarn start`.



## To do

* Add details on GoodReads API key, setting value in Secrets Manager
* Move NYT API key to Secrets Manager
* Book rating field is inoperable due to redirect by GoodReads
