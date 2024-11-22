// resolvers/Query.ts
import prisma from "../utils/prisma";
import type { Feed, LinkOrderBy } from "../utils/types";

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
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
    : {};

  const links = await prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });

  const count = await prisma.link.count({ where });

  return { id, links, count };
}

const Query = { info, feed };

export default Query;
