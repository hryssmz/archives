// bin/build-schema.ts
import fs from "node:fs";
import path from "node:path";
import { rootDir } from "../lib/utils";
import { schema } from "../appsync/schema";

fs.writeFileSync(path.resolve(rootDir, "appsync", "schema.graphql"), schema);
