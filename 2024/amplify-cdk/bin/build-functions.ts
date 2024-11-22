// bin/build-functions.ts
import path from "node:path";
import { buildAppSyncFunctions } from "../lib/utils";

buildAppSyncFunctions(
  [path.resolve(__dirname, "..", "appsync", "functions", "todo", "*.ts")],
  path.resolve(__dirname, "..", "dist", "appsync", "functions", "todo")
);

buildAppSyncFunctions(
  [path.resolve(__dirname, "..", "appsync", "resolvers", "common", "*.ts")],
  path.resolve(__dirname, "..", "dist", "appsync", "resolvers", "common")
);
