// hello-world/index.ts
import type { APIGatewayProxyResult } from "aws-lambda";

export async function handler(): Promise<APIGatewayProxyResult> {
  const body = {
    message: "Hello World!",
    endpoint: process.env.ENDPOINT,
  };
  const response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(body),
    multiValueHeaders: {},
    isBase64Encoded: false,
  };
  return response;
}
