// appsync/functions/todo/list-todos.ts
import { util } from "@aws-appsync/utils";
import { scan } from "@aws-appsync/utils/dynamodb";
import type { Context } from "@aws-appsync/utils";
import type {
  ListTodosQuery,
  ListTodosQueryVariables,
} from "../../codegen/API";

export function request(ctx: Context<ListTodosQueryVariables>) {
  console.log(ctx);
  const { filter, limit, nextToken } = ctx.args;
  const req = scan({ limit, nextToken, filter });
  console.log(req);
  return req;
}

export function response(
  ctx: Context<object, object, object, object, ListTodosQuery["listTodos"]>
) {
  console.log(ctx);
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  const { items = [], nextToken } = result ?? {};
  return { items, nextToken };
}
