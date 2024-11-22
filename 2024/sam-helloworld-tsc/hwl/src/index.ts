// index.ts
import axios from "axios";

export async function getGlobalIp() {
  const { data } = await axios<string>("http://ifconfig.me");
  return data;
}
