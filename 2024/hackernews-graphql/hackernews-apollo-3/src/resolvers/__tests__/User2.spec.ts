// resolvers/__tests__/User2.spec.ts
import { gql } from "@apollo/client/core";
import bcrypt from "bcryptjs";
import { User, Link } from "../../utils/sequelize";
import { client } from "../../utils/testings";

beforeEach(async () => {
  await Link.destroy({ where: {} });
  await User.destroy({ where: {} });
});

afterAll(async () => {
  await Link.destroy({ where: {} });
  await User.destroy({ where: {} });
});

describe("User.links", () => {
  const query = gql`
    query Feed(
      $filter: String
      $skip: Int
      $take: Int
      $orderBy: LinkOrderByInput
    ) {
      feed(filter: $filter, skip: $skip, take: $take, orderBy: $orderBy) {
        links {
          postedBy {
            name
            links {
              id
            }
          }
        }
      }
    }
  `;

  test("User.links resolves", async () => {
    const john = await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    const blog = await john.createLink({
      description: "John Doe's blog",
      url: "https://blog.john-doe.com",
    });
    await john.createLink({
      description: "John Doe's homepage",
      url: "https://john-doe.com",
    });

    const variables = { orderBy: { description: "asc" } };
    const { data } = await client.query({ query, variables });
    const { links } = data.feed.links[0].postedBy;

    expect(links).toHaveLength(2);
    expect(links[0].id).toBe(blog.id);
  });
});
