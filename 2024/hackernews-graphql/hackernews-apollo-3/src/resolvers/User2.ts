// resolvers/User2.ts
import { User, Link } from "../utils/sequelize";

async function links(parent: User): Promise<Link[]> {
  const user = await User.findByPk(parent.id, { include: Link });
  if (user === null || user.links === undefined) {
    throw new Error("Failed to resolve User.links");
  }
  const links = user.links;
  return links;
}

const UserResolver = { links };

export default UserResolver;
