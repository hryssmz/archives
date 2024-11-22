// lib/stacks/appsync-app-stack.ts
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppSyncApiConstruct } from "../constructs/appsync-api-construct";
import { AuthCognitoConstruct } from "../constructs/auth-cognito-construct";
import { StaticWebsiteConstruct } from "../constructs/static-website-construct";
import type { ResourcesConfig } from "aws-amplify";

export class AppSyncAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create Congito User Pool and User Pool Client.
    const authCognitoConstruct = new AuthCognitoConstruct(
      this,
      "AuthCognitoConstruct",
      {}
    );
    const userPool = authCognitoConstruct.userpool;
    const userPoolClient = authCognitoConstruct.userpoolClient;

    // Create AppSync GraphQL API
    const appSyncApiConstruct = new AppSyncApiConstruct(
      this,
      "AppSyncApiConstruct",
      { apiName: `${this.stackName}-AppSyncApi` }
    );
    const api = appSyncApiConstruct.api;
    new cdk.CfnOutput(this, "GraphqlApiId", {
      description: "GraphQL API ID",
      value: api.apiId,
    });
    new cdk.CfnOutput(this, "CurlCreateTodoCommand", {
      description: "curl command to create Todo",
      value: `curl -sSL -X POST -H "x-api-key:${api.apiKey}" -d '{"query":"mutation CreateTodo($input: CreateTodoInput!) { createTodo(input: $input) { id, name, description, createdAt, updatedAt } }","variables":{"input":{"name":"Shopping List","description":"I need to buy eggs"}}}' ${api.graphqlUrl} | jq`,
    });
    new cdk.CfnOutput(this, "CurlListTodosCommand", {
      description: "curl command to list Todos",
      value: `curl -sSL -X POST -H "x-api-key:${api.apiKey}" -d '{"query":"query ListTodos { listTodos { items { id, name, description, createdAt, updatedAt }, nextToken } }"}' ${api.graphqlUrl} | jq`,
    });

    // Create static website
    const staticWebsiteConstruct = new StaticWebsiteConstruct(
      this,
      "StaticWebsiteConstruct",
      {}
    );
    const bucket = staticWebsiteConstruct.bucket;
    const distribution = staticWebsiteConstruct.distribution;
    new cdk.CfnOutput(this, "DistributionDomain", {
      description: "CloudFront distribution domain",
      value: distribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, "BucketName", {
      description: "S3 bucket name",
      value: bucket.bucketName,
    });

    // Amplify config
    const amplifyConfig: ResourcesConfig = {
      API: {
        GraphQL: {
          endpoint: api.graphqlUrl,
          region: this.region,
          defaultAuthMode: "apiKey",
          apiKey: api.apiKey,
        },
      },
      Auth: {
        Cognito: {
          userPoolId: userPool.userPoolId,
          userPoolClientId: userPoolClient.userPoolClientId,
        },
      },
    };
    new cdk.CfnOutput(this, "AmplifyConfig", {
      description: "Amplify config",
      value: JSON.stringify(amplifyConfig, null, 2),
    });
  }
}
