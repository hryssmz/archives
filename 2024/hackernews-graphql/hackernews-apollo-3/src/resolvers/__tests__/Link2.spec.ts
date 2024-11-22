// resolvers/__tests__/Link2.spec.ts
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

describe("Link.postedBy", () => {
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
            id
          }
        }
      }
    }
  `;

  test("Link.postedBy resolves", async () => {
    const john = await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    await john.createLink({
      description: "John Doe's blog",
      url: "https://blog.john-doe.com",
    });

    const { data } = await client.query({ query });
    const { postedBy } = data.feed.links[0];

    expect(postedBy.id).toBe(john.id);
  });
});

describe("Link.votes", () => {
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
            id
          }
        }
      }
    }
  `;

  test("Link.votes resolves", async () => {
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
    const vote = await jane.createVote({ linkId: blog.id });

    const { data } = await client.query({ query });
    const { votes } = data.feed.links[0];

    expect(votes[0].id).toBe(String(vote.id));
  });
});
