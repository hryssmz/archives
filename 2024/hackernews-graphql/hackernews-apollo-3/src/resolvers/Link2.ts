// resolvers/Link2.ts
import { Link, User, Vote } from "../utils/sequelize";

async function postedBy(parent: Link): Promise<User | null> {
  const link = await Link.findByPk(parent.id, {
    include: { model: User, as: "postedBy" },
  });
  if (link === null || link.postedBy === undefined) {
    throw new Error("Failed to resolve Link.postedBy");
  }
  const user = link.postedBy;
  return user;
}

async function votes(parent: Link): Promise<Vote[]> {
  const link = await Link.findByPk(parent.id, {
    include: Vote,
  });
  if (link === null || link.votes === undefined) {
    throw new Error("Failed to resolve Link.votes");
  }
  const votes = link.votes;
  return votes;
}

const LinkResolver = { postedBy, votes };

export default LinkResolver;
