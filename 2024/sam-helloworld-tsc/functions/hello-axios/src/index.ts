// hello-axios/index.ts
import axios from "axios";
import type { APIGatewayProxyResult } from "aws-lambda";

export async function handler(): Promise<APIGatewayProxyResult> {
  const { data: globalIp } = await axios("http://ifconfig.me");
  const body = {
    message: "Hello World!",
    globalIp,
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
