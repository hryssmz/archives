// integration/hello-world.spec.ts
import axios from "axios";
import { apiPrefix } from "../utils";

test("hello-world API", async () => {
  const { data, status } = await axios(`${apiPrefix}/`);

  expect(status).toBe(200);
  expect(data.message).toBe("Hello World!");
});
