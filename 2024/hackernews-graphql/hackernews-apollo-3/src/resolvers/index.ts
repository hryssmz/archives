// resolvers/index.ts
import Query from "./Query2";
import Mutation from "./Mutation2";
import Subscription from "./Subscription";
import UserResolver from "./User2";
import LinkResolver from "./Link2";
import VoteResolver from "./Vote2";
import type { Config } from "apollo-server-core";

const resolvers: Config["resolvers"] = {
  Query,
  Mutation,
  Subscription,
  User: UserResolver,
  Link: LinkResolver,
  Vote: VoteResolver,
};

export default resolvers;
