// utils/testings.ts
import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { HOST, PORT } from "./env";

export const client = new ApolloClient({
  link: new HttpLink({ uri: `http://${HOST}:${PORT}/graphql`, fetch }),
  cache: new InMemoryCache(),
});
