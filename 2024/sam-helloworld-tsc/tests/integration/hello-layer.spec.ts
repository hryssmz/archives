// integration/hello-layer.spec.ts
import axios from "axios";
import { apiPrefix } from "../utils";

test("hello-layer API", async () => {
  const { data: globalIp } = await axios("http://ifconfig.me");
  const { data, status } = await axios(`${apiPrefix}/layer/`);

  expect(status).toBe(200);
  expect(data.globalIp).toBe(globalIp);
});
