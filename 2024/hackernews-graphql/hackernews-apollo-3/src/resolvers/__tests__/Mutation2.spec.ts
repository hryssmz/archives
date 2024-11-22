// resolvers/__tests__/Mutation2.spec.ts
import { gql } from "@apollo/client/core";
import bcrypt from "bcryptjs";
import { User } from "../../utils/sequelize";
import { client } from "../../utils/testings";

beforeEach(async () => {
  await User.destroy({ where: {} });
});

afterAll(async () => {
  await User.destroy({ where: {} });
});

describe("signup", () => {
  const mutation = gql`
    mutation Signup($email: String!, $password: String!, $name: String!) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `;

  test("successful signup", async () => {
    const variables = {
      name: "John Doe",
      email: "john-doe2@example.com",
      password: "secret",
    };
    const { data } = await client.mutate({ mutation, variables });

    expect(data.signup.token).toHaveLength(169);

    const john = await User.findOne({
      where: {
        name: "John Doe",
        email: "john-doe2@example.com",
      },
    });

    expect(john).not.toBeNull();
  });
});

describe("login", () => {
  const mutation = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  beforeEach(async () => {
    await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
  });

  test("bad email", async () => {
    const variables = {
      email: "bad-email@example.com",
      password: "bad-password",
    };
    const errors = await client
      .mutate({ mutation, variables })
      .catch(error => error.graphQLErrors);

    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe("No such user found");
  });

  test("bad password", async () => {
    const variables = {
      email: "john-doe@example.com",
      password: "bad-password",
    };
    const errors = await client
      .mutate({ mutation, variables })
      .catch(error => error.graphQLErrors);

    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe("Invalid password");
  });

  test("successful login", async () => {
    const variables = {
      email: "john-doe@example.com",
      password: "secret",
    };
    const { data } = await client.mutate({ mutation, variables });

    expect(data.login.token).toHaveLength(169);
  });
});
