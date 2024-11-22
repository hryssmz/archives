// resolvers/__tests__/Query2.spec.ts
import { gql } from "@apollo/client/core";
import { Link } from "../../utils/sequelize";
import { client } from "../../utils/testings";

beforeEach(async () => {
  await Link.destroy({ where: {} });
});

afterAll(async () => {
  await Link.destroy({ where: {} });
});

describe("info", () => {
  const query = gql`
    query Info {
      info
    }
  `;

  test("HTTP 200", async () => {
    const { data } = await client.query({ query });

    expect(data.info).toBe("This is the API of a Hackernews Clone");
  });
});

describe("feed", () => {
  beforeEach(async () => {
    await Link.bulkCreate([
      { description: "Foo", url: "http://foo.com" },
      { description: "Test1", url: "http://example2.com" },
      { description: "Test1", url: "http://example1.com" },
      { description: "Test3", url: "http://example3.com" },
    ]);
  });

  const query = gql`
    query Feed(
      $filter: String
      $skip: Int
      $take: Int
      $orderBy: LinkOrderByInput
    ) {
      feed(filter: $filter, skip: $skip, take: $take, orderBy: $orderBy) {
        count
        links {
          description
          url
        }
      }
    }
  `;

  test("no options", async () => {
    const { data } = await client.query({ query });

    expect(data.feed.count).toBe(4);
    expect(data.feed.links).toEqual(
      [
        { description: "Foo", url: "http://foo.com" },
        { description: "Test1", url: "http://example2.com" },
        { description: "Test1", url: "http://example1.com" },
        { description: "Test3", url: "http://example3.com" },
      ].map(obj => ({ __typename: "Link", ...obj }))
    );
  });

  test("with filter option", async () => {
    const variables = {
      filter: "Test",
    };
    const { data } = await client.query({ query, variables });

    expect(data.feed.count).toBe(3);
    expect(data.feed.links).toEqual(
      [
        { description: "Test1", url: "http://example2.com" },
        { description: "Test1", url: "http://example1.com" },
        { description: "Test3", url: "http://example3.com" },
      ].map(obj => ({ __typename: "Link", ...obj }))
    );
  });

  test("with skip and take option", async () => {
    const variables = {
      skip: 1,
      take: 2,
    };
    const { data } = await client.query({ query, variables });

    expect(data.feed.count).toBe(4);
    expect(data.feed.links).toEqual(
      [
        { description: "Test1", url: "http://example2.com" },
        { description: "Test1", url: "http://example1.com" },
      ].map(obj => ({ __typename: "Link", ...obj }))
    );
  });

  test("with orderBy option", async () => {
    const variables = {
      orderBy: {
        description: "desc",
        url: "asc",
      },
    };
    const { data } = await client.query({ query, variables });

    expect(data.feed.count).toBe(4);
    expect(data.feed.links).toEqual(
      [
        { description: "Test3", url: "http://example3.com" },
        { description: "Test1", url: "http://example1.com" },
        { description: "Test1", url: "http://example2.com" },
        { description: "Foo", url: "http://foo.com" },
      ].map(obj => ({ __typename: "Link", ...obj }))
    );
  });

  test("with all options", async () => {
    const variables = {
      filter: "Test",
      skip: 1,
      take: 1,
      orderBy: {
        description: "asc",
        url: "desc",
      },
    };
    const { data } = await client.query({ query, variables });

    expect(data.feed.count).toBe(3);
    expect(data.feed.links).toEqual(
      [{ description: "Test1", url: "http://example1.com" }].map(obj => ({
        __typename: "Link",
        ...obj,
      }))
    );
  });
});
