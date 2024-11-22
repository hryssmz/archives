// integration/hello-world.spec.ts
import axios from "axios";
import { apiPrefix } from "../utils";

test("hello-world API", async () => {
  const { data: globalIp } = await axios("http://ifconfig.me");
  const { data, status } = await axios(`${apiPrefix}/axios/`);

  expect(status).toBe(200);
  expect(data.globalIp).toBe(globalIp);
});
