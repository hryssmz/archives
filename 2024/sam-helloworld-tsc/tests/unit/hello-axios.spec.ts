// unit/hello-axios.spec.ts
import axios from "axios";
import { handler } from "../../functions/hello-axios/src";

test("hello-axios hander", async () => {
  const { data: globalIp } = await axios("http://ifconfig.me");
  const response = await handler();
  const body = JSON.parse(response.body);

  expect(response.statusCode).toBe(200);
  expect(body.globalIp).toBe(globalIp);
});
