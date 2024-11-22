// lib/constructs/appsync-api-construct.ts
import path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as appsync from "aws-cdk-lib/aws-appsync";
import * as logs from "aws-cdk-lib/aws-logs";
import * as xray from "aws-cdk-lib/aws-xray";
import { Construct } from "constructs";
import { AppSyncTodoConstruct } from "../constructs/appsync-todo-construct";
import { rootDir } from "../utils";

export interface AppSyncApiConstructProps {
  apiName: string;
}

export class AppSyncApiConstruct extends Construct {
  api: appsync.GraphqlApi;

  constructor(scope: Construct, id: string, props: AppSyncApiConstructProps) {
    super(scope, id);
    const assetDir = path.resolve(rootDir, "dist", "appsync");

    // Create AppSync GraphQL API
    this.api = new appsync.GraphqlApi(this, "GraphqlApi", {
      name: props.apiName,
      definition: appsync.Definition.fromFile(
        path.join(rootDir, "appsync", "schema.graphql")
      ),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
      logConfig: {
        fieldLogLevel: appsync.FieldLogLevel.ALL,
        excludeVerboseContent: true,
      },
      xrayEnabled: true,
    });
    new logs.LogGroup(this, "GraphqlApiLogGroup", {
      logGroupName: `/aws/appsync/apis/${this.api.apiId}`,
      retention: Infinity,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Create XRay resources
    new xray.CfnSamplingRule(this, "GraphqlApiSamplingRule", {
      samplingRule: {
        ruleName: props.apiName,
        resourceArn: this.api.arn,
        priority: 10,
        fixedRate: 0.1,
        reservoirSize: 1,
        serviceName: "*",
        serviceType: "AWS::AppSync::GraphQLAPI",
        host: "*",
        httpMethod: "*",
        urlPath: "*",
        version: 1,
      },
    });
    new xray.CfnGroup(this, "GraphqlApiGroup", {
      groupName: props.apiName,
      filterExpression: `service("${props.apiName}")`,
    });

    // Create AppSync todo operations
    new AppSyncTodoConstruct(this, "AppSyncTodoConstruct", {
      assetDir,
      api: this.api,
    });
  }
}
