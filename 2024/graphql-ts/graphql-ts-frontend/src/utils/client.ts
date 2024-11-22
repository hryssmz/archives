import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:13002",
  timeout: 30 * 1000,
});

export default client;
