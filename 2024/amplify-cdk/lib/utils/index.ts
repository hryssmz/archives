// lib/utils/index.ts
import path from "node:path";
import { buildSync } from "esbuild";

export const rootDir = path.resolve(__dirname, "..", "..");

export function buildAppSyncFunctions(entryPoints: string[], outdir: string) {
  buildSync({
    format: "esm",
    target: "esnext",
    platform: "node",
    external: ["@aws-appsync/utils"],
    outdir,
    entryPoints,
    bundle: true,
    sourcemap: "inline",
    sourcesContent: false,
  });
}
