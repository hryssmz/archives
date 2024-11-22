// resolvers/__tests__/Vote2.spec.ts
import { gql } from "@apollo/client/core";
import bcrypt from "bcryptjs";
import { User, Link, Vote } from "../../utils/sequelize";
import { client } from "../../utils/testings";

beforeEach(async () => {
  await Vote.destroy({ where: {} });
  await Link.destroy({ where: {} });
  await User.destroy({ where: {} });
});

afterAll(async () => {
  await Vote.destroy({ where: {} });
  await Link.destroy({ where: {} });
  await User.destroy({ where: {} });
});

describe("Vote.link", () => {
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
          }
          votes {
            link {
              id
            }
          }
        }
      }
    }
  `;

  test("Vote.link resolves", async () => {
    const john = await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    const blog = await john.createLink({
      description: "John Doe's blog",
      url: "https://blog.john-doe.com",
    });
    const jane = await User.create({
      name: "Jane Doe",
      email: "jane-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    await jane.createVote({ linkId: blog.id });

    const { data } = await client.query({ query });
    const { link } = data.feed.links[0].votes[0];

    expect(link.id).toBe(blog.id);
  });
});

describe("Vote.user", () => {
  const query = gql`
    query Feed(
      $filter: String
      $skip: Int
      $take: Int
      $orderBy: LinkOrderByInput
    ) {
      feed(filter: $filter, skip: $skip, take: $take, orderBy: $orderBy) {
        links {
          votes {
            user {
              id
            }
          }
        }
      }
    }
  `;

  test("Vote.link resolves", async () => {
    const john = await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    const blog = await john.createLink({
      description: "John Doe's blog",
      url: "https://blog.john-doe.com",
    });
    const jane = await User.create({
      name: "Jane Doe",
      email: "jane-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    await jane.createVote({ linkId: blog.id });

    const { data } = await client.query({ query });
    const { user } = data.feed.links[0].votes[0];

    expect(user.id).toBe(jane.id);
  });
});
