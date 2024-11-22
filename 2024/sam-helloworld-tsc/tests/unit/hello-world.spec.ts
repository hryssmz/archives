// unit/hello-world.spec.ts
import { handler } from "../../functions/hello-world/src";

test("hello-world hander", async () => {
  const response = await handler();
  const body = JSON.parse(response.body);

  expect(response.statusCode).toBe(200);
  expect(body.message).toBe("Hello World!");
});
