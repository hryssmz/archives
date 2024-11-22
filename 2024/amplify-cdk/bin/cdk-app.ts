#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AppSyncAppStack } from "../lib/stacks/appsync-app-stack";

const app = new cdk.App();

new AppSyncAppStack(app, "AppSyncAppStack", {
  stackName: "appsync-app",
});
