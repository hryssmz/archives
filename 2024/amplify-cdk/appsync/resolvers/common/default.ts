// appsync/resolvers/common/default.ts
import type { Context } from "@aws-appsync/utils";

export function request(ctx: Context) {
  console.log(ctx);
  return {};
}

export function response(ctx: Context) {
  console.log(ctx);
  return ctx.prev.result;
}
