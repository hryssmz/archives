// appsync/functions/todo/get-todo.ts
import { util } from "@aws-appsync/utils";
import { get } from "@aws-appsync/utils/dynamodb";
import type { Context } from "@aws-appsync/utils";
import type { GetTodoQuery, GetTodoQueryVariables } from "../../codegen/API";

export function request(ctx: Context<GetTodoQueryVariables>) {
  console.log(ctx);
  const { id } = ctx.args;
  const key = { id };
  const req = get({ key });
  console.log(req);
  return req;
}

export function response(
  ctx: Context<object, object, object, object, GetTodoQuery["getTodo"]>
) {
  console.log(ctx);
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  return result;
}
