// appsync/functions/todo/delete-todo.ts
import { util } from "@aws-appsync/utils";
import { remove } from "@aws-appsync/utils/dynamodb";
import type { Context } from "@aws-appsync/utils";
import type {
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
} from "../../codegen/API";

export function request(ctx: Context<DeleteTodoMutationVariables>) {
  console.log(ctx);
  const { id } = ctx.args.input;
  const key = { id };
  const req = remove({ key });
  console.log(req);
  return req;
}

export function response(
  ctx: Context<object, object, object, object, DeleteTodoMutation["deleteTodo"]>
) {
  console.log(ctx);
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  return result;
}
