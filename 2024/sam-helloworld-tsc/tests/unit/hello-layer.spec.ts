// unit/hello-layer.spec.ts
import axios from "axios";
import { handler } from "../../functions/hello-layer/src";

test("hello-layer hander", async () => {
  const { data: globalIp } = await axios("http://ifconfig.me");
  const response = await handler();
  const body = JSON.parse(response.body);

  expect(response.statusCode).toBe(200);
  expect(body.globalIp).toBe(globalIp);
});
