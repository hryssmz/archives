// resolvers/Vote2.ts
import { Link, User, Vote } from "../utils/sequelize";

async function link(parent: Vote): Promise<Link> {
  const vote = await Vote.findByPk(parent.id, { include: Link });
  if (vote === null || vote.link === undefined) {
    throw new Error("Failed to resolve Vote.link");
  }
  const link = vote.link;
  return link;
}

async function user(parent: Vote): Promise<User> {
  const vote = await Vote.findByPk(parent.id, { include: User });
  if (vote === null || vote.user === undefined) {
    throw new Error("Failed to resolve Vote.user");
  }
  const user = vote.user;
  return user;
}

const VoteResolver = { link, user };

export default VoteResolver;
