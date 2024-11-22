// appsync/functions/todo/update-todo.ts
import { util } from "@aws-appsync/utils";
import { update } from "@aws-appsync/utils/dynamodb";
import type { Context } from "@aws-appsync/utils";
import type {
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from "../../codegen/API";

export function request(ctx: Context<UpdateTodoMutationVariables>) {
  console.log(ctx);
  const { id, ...values } = ctx.args.input;
  const updatedAt = util.time.nowISO8601();
  const key = { id };
  const condition = Object.keys(key).reduce((acc, k) => {
    return { ...acc, [k]: { attributeExists: true } };
  }, {});
  const req = update({ key, update: { ...values, updatedAt }, condition });
  console.log(req);
  return req;
}

export function response(
  ctx: Context<object, object, object, object, UpdateTodoMutation["updateTodo"]>
) {
  console.log(ctx);
  const { error, result } = ctx;
  if (error) {
    return util.appendError(error.message, error.type, result);
  }
  return result;
}
