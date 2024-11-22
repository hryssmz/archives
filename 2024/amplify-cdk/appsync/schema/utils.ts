// appsync/schema/utils.ts
export const format = (s: string, start: number) =>
  s
    .split("\n")
    .slice(start, -start || undefined)
    .join("\n")
    .trimStart();
