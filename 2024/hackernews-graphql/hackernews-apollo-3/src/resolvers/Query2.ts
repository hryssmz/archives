// resolvers/Query2.ts
import { Op } from "sequelize";
import { Link } from "../utils/sequelize";
import type { OrderItem } from "sequelize";
import type { Feed, LinkOrderBy } from "../utils/types2";

function info(): string {
  return "This is the API of a Hackernews Clone";
}

async function feed(
  _: unknown,
  args: { filter?: string; skip?: number; take?: number; orderBy?: LinkOrderBy }
): Promise<Feed> {
  const id = `main-feed:${JSON.stringify(args)}`;

  const where = args.filter
    ? {
        [Op.or]: {
          description: { [Op.substring]: args.filter },
          url: { [Op.substring]: args.filter },
        },
      }
    : {};

  const order = args.orderBy
    ? ([
        ...(args.orderBy.description
          ? [["description", args.orderBy.description.toUpperCase()]]
          : []),
        ...(args.orderBy.url ? [["url", args.orderBy.url.toUpperCase()]] : []),
        ...(args.orderBy.createdAt
          ? [["createdAt", args.orderBy.createdAt.toUpperCase()]]
          : []),
      ] as OrderItem[])
    : [];

  const links = await Link.findAll({
    where,
    offset: args.skip,
    limit: args.take,
    order: order,
  });

  const count = await Link.count({ where });

  return { id, links, count };
}

const Query = { info, feed };

export default Query;
