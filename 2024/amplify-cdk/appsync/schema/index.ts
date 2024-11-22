// appsync/schema/index.ts
import * as common from "./common";
import * as todo from "./todo";
import { format } from "./utils";

export const schema = `#graphql
  ${format(common.types, 1)}

  ${format(todo.types, 1)}

  type Query {
    ${format(todo.queries, 2)}
  }

  type Mutation {
    ${format(todo.mutations, 2)}
  }

  type Subscription {
    ${format(todo.subscriptions, 2)}
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`
  .concat("\n")
  .split("\n")
  .slice(1, -1)
  .map(s => s.replace("  ", ""))
  .join("\n");
