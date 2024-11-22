// lib/constructs/appsync-todo-construct.ts
import path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as appsync from "aws-cdk-lib/aws-appsync";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export interface AppSyncTodoConstructProps {
  api: appsync.GraphqlApi;
  assetDir: string;
  tableName?: string;
}

export class AppSyncTodoConstruct extends Construct {
  constructor(scope: Construct, id: string, props: AppSyncTodoConstructProps) {
    super(scope, id);
    const { api, assetDir } = props;
    const runtime = appsync.FunctionRuntime.JS_1_0_0;

    // Create Todo data source
    const table = new dynamodb.Table(this, "TodoTable", {
      tableName: props.tableName,
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 5,
      writeCapacity: 5,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const dataSource = new appsync.DynamoDbDataSource(this, "TodoDataSource", {
      name: "TodoDataSource",
      description: "Todo DynamoDB data source",
      api,
      table,
    });

    // Create Todo functions
    const createTodoFunction = new appsync.AppsyncFunction(
      this,
      "CreateTodoFunction",
      {
        name: "CreateTodoFunction",
        description: "Create Todo function",
        api,
        dataSource,
        runtime,
        code: appsync.Code.fromAsset(
          path.resolve(assetDir, "functions", "todo", "create-todo.js")
        ),
      }
    );
    const updateTodoFunction = new appsync.AppsyncFunction(
      this,
      "UpdateTodoFunction",
      {
        name: "UpdateTodoFunction",
        description: "Update Todo function",
        api,
        dataSource,
        runtime,
        code: appsync.Code.fromAsset(
          path.resolve(assetDir, "functions", "todo", "update-todo.js")
        ),
      }
    );
    const deleteTodoFunction = new appsync.AppsyncFunction(
      this,
      "DeleteTodoFunction",
      {
        name: "DeleteTodoFunction",
        description: "Delete Todo function",
        api,
        dataSource,
        runtime,
        code: appsync.Code.fromAsset(
          path.resolve(assetDir, "functions", "todo", "delete-todo.js")
        ),
      }
    );
    const getTodoFunction = new appsync.AppsyncFunction(
      this,
      "GetTodoFunction",
      {
        name: "GetTodoFunction",
        description: "Get Todo function",
        api,
        dataSource,
        runtime,
        code: appsync.Code.fromAsset(
          path.resolve(assetDir, "functions", "todo", "get-todo.js")
        ),
      }
    );
    const listTodosFunction = new appsync.AppsyncFunction(
      this,
      "ListTodosFunction",
      {
        name: "ListTodosFunction",
        description: "List Todos function",
        api,
        dataSource,
        runtime,
        code: appsync.Code.fromAsset(
          path.resolve(assetDir, "functions", "todo", "list-todos.js")
        ),
      }
    );

    // Create Todo Mutation resolvers
    new appsync.Resolver(this, "CreateTodoResolver", {
      typeName: "Mutation",
      fieldName: "createTodo",
      api,
      runtime,
      pipelineConfig: [createTodoFunction],
      code: appsync.Code.fromAsset(
        path.resolve(assetDir, "resolvers", "common", "default.js")
      ),
    });
    new appsync.Resolver(this, "UpdateTodoResolver", {
      typeName: "Mutation",
      fieldName: "updateTodo",
      api,
      runtime,
      pipelineConfig: [updateTodoFunction],
      code: appsync.Code.fromAsset(
        path.resolve(assetDir, "resolvers", "common", "default.js")
      ),
    });
    new appsync.Resolver(this, "DeleteTodoResolver", {
      typeName: "Mutation",
      fieldName: "deleteTodo",
      api,
      runtime,
      pipelineConfig: [deleteTodoFunction],
      code: appsync.Code.fromAsset(
        path.resolve(assetDir, "resolvers", "common", "default.js")
      ),
    });

    // Create Todo Query resolvers
    new appsync.Resolver(this, "GetTodoResolver", {
      typeName: "Query",
      fieldName: "getTodo",
      api,
      runtime,
      pipelineConfig: [getTodoFunction],
      code: appsync.Code.fromAsset(
        path.resolve(assetDir, "resolvers", "common", "default.js")
      ),
    });
    new appsync.Resolver(this, "ListTodosResolver", {
      typeName: "Query",
      fieldName: "listTodos",
      api,
      runtime,
      pipelineConfig: [listTodosFunction],
      code: appsync.Code.fromAsset(
        path.resolve(assetDir, "resolvers", "common", "default.js")
      ),
    });
  }
}
