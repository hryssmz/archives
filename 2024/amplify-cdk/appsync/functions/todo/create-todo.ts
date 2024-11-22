// appsync/functions/todo/create-todo.ts
import { util } from "@aws-appsync/utils";
import { put } from "@aws-appsync/utils/dynamodb";
import type { Context } from "@aws-appsync/utils";
import type {
  CreateTodoMutation,
  CreateTodoMutationVariables,
} from "../../codegen/API";

export function request(ctx: Context<CreateTodoMutationVariables>) {
  console.log(ctx);
  const id = util.autoId();
  const createdAt = util.time.nowISO8601();
  const key = { id };
  const item = { id, createdAt, updatedAt: createdAt, ...ctx.args.input };
  const condition = { id: { attributeExists: false } };
  const req = put({ key, item, condition });
  console.log(req);
  return req;
}

export function response(
  ctx: Context<object, object, object, object, CreateTodoMutation["createTodo"]>
) {
  console.log(ctx);
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  return result;
}
