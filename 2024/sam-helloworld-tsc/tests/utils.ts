// utils.ts
import type { APIGatewayProxyEvent, Context } from "aws-lambda";

export const apiPrefix =
  "http://localstack:4566/restapis/9zfeaboeop/dev/_user_request_";
export const envVars = {
  ENDPOINT: "http://localstack:4566",
};
export const region = "ap-northeast-1";

export const clientConfig = {
  region,
  endpoint: envVars.ENDPOINT,
};

export function env() {
  (Object.keys(envVars) as (keyof typeof envVars)[]).forEach(key => {
    process.env[key] = envVars[key];
  });
}

export function getApigwEvent() {
  const apigwEvent: APIGatewayProxyEvent = {
    body: JSON.stringify({ message: "hello world" }),
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, sdch",
      "Accept-Language": "en-US,en;q=0.8",
      "Cache-Control": "max-age=0",
      "CloudFront-Forwarded-Proto": "https",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-Mobile-Viewer": "false",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Tablet-Viewer": "false",
      "CloudFront-Viewer-Country": "US",
      Host: "1234567890.execute-api.us-east-1.amazonaws.com",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Custom User Agent String",
      Via: "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
      "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
      "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https",
    },
    httpMethod: "POST",
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: "/path/to/resource",
    pathParameters: {
      proxy: "/path/to/resource",
    },
    queryStringParameters: {
      foo: "bar",
    },
    requestContext: {
      accountId: "123456789012",
      apiId: "1234567890",
      authorizer: {},
      httpMethod: "POST",
      identity: {
        accessKey: null,
        accountId: null,
        apiKey: null,
        apiKeyId: null,
        caller: null,
        clientCert: null,
        cognitoAuthenticationProvider: null,
        cognitoAuthenticationType: null,
        cognitoIdentityId: null,
        cognitoIdentityPoolId: null,
        principalOrgId: null,
        sourceIp: "127.0.0.1",
        user: null,
        userAgent: "Custom User Agent String",
        userArn: null,
      },
      path: "/prod/path/to/resource",
      protocol: "HTTP/1.1",
      requestId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      requestTimeEpoch: 1428582896000,
      resourceId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      resourcePath: "/{proxy+}",
      stage: "prod",
    },
    resource: "/{proxy+}",
    stageVariables: {
      baz: "qux",
    },
  };
  return apigwEvent;
}

export function getContext() {
  const context: Context = {
    awsRequestId: "AWS_REQUEST_ID",
    callbackWaitsForEmptyEventLoop: true,
    functionName: "FUNCTION_NAME",
    functionVersion: "FUNCTION_VERSION",
    invokedFunctionArn: "INVOKED_FUNCTION_ARN",
    logGroupName: "LOG_GROUP_NAME",
    logStreamName: "LOG_STREAM_NAME",
    memoryLimitInMB: "MEMORY_LIMIT_IN_MB",
    getRemainingTimeInMillis() {
      return 3000;
    },
    done() {
      //
    },
    fail() {
      //
    },
    succeed() {
      //
    },
  };
  return context;
}
