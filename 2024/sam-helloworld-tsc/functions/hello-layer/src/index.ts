// hello-layer/index.ts
import { getGlobalIp } from "hwl";
import type { APIGatewayProxyResult } from "aws-lambda";

export async function handler(): Promise<APIGatewayProxyResult> {
  const globalIp = await getGlobalIp();
  const body = {
    message: "Hello World!",
    globalIp,
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
