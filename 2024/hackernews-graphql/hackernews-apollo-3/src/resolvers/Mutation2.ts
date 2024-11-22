// resolvers/Mutation2.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pubsub } from "../utils/apollo";
import { Link, User, Vote } from "../utils/sequelize";
import { APP_SECRET } from "../utils/crypto";
import type { Context } from "../utils/apollo";
import type { AuthPayload } from "../utils/types2";

async function signup(
  _: unknown,
  args: Pick<User, "name" | "email" | "password">
): Promise<AuthPayload> {
  const password = await bcrypt.hash(args.password, 10);
  const user = await User.create({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

async function login(
  _: unknown,
  args: Pick<User, "email" | "password">
): Promise<AuthPayload> {
  const user = await User.findOne({ where: { email: args.email } });
  if (user === null) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

async function post(
  _: unknown,
  args: Pick<Link, "url" | "description">,
  context: Context
): Promise<Link> {
  const { userId } = context;
  const newLink = await Link.create({
    url: args.url,
    description: args.description,
    postedById: userId,
  });
  pubsub.publish("NEW_LINK", newLink);

  return newLink;
}

async function vote(
  _: unknown,
  args: Pick<Vote, "linkId">,
  context: Context
): Promise<Vote | null> {
  const { userId } = context;
  if (userId === null) {
    return null;
  }

  const vote = await Vote.findOne({
    where: {
      linkId: args.linkId,
      userId,
    },
  });
  if (vote !== null) {
    throw new Error(`Already voted for link: ${args.linkId}`);
  }

  const newVote = await Vote.create({
    linkId: args.linkId,
    userId,
  });
  pubsub.publish("NEW_VOTE", newVote);

  return newVote;
}

const Mutation = { signup, login, post, vote };

export default Mutation;
