// essentials-example/mocks/models.ts
import { nanoid } from "@reduxjs/toolkit";
import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
import type { Post } from "../store/posts";
import type { User } from "../store/users";

export const db = factory({
  user: {
    id: primaryKey(() => nanoid()),
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
    name: () => "",
    username: () => faker.internet.userName(),
    posts: manyOf("post"),
  },
  post: {
    id: primaryKey(() => nanoid()),
    title: () => faker.lorem.words(),
    date: () => new Date().toISOString(),
    content: () => faker.lorem.paragraphs(),
    user: oneOf("user"),
    comments: manyOf("comment"),
    reactions: oneOf("reactions"),
  },
  comment: {
    id: primaryKey(() => nanoid()),
    date: () => new Date().toISOString(),
    text: () => faker.lorem.sentence(),
    post: oneOf("post"),
  },
  reactions: {
    id: primaryKey(() => nanoid()),
    thumbsUp: () => 0,
    hooray: () => 0,
    heart: () => 0,
    rocket: () => 0,
    eyes: () => 0,
    post: oneOf("post"),
  },
});

export type UserEntity = ReturnType<typeof db.user.create>;
export type PostEntity = ReturnType<typeof db.post.create>;
export type CommentEntity = ReturnType<typeof db.comment.create>;
export type ReactionsEntity = ReturnType<typeof db.reactions.create>;

export const initializeDB = (seed?: number) => {
  if (seed !== undefined) {
    faker.seed(seed);
  }
  const nUsers = faker.number.int({ min: 3, max: 5 });
  Array(nUsers)
    .fill(0)
    .forEach(() => {
      const author = db.user.create();
      db.user.update({
        where: { id: { equals: author.id } },
        data: { name: `${author.firstName} ${author.lastName}` },
      });
      const nPosts = faker.number.int({ min: 0, max: 4 });
      Array(nPosts)
        .fill(0)
        .forEach(() => {
          db.post.create({
            user: author,
            date: faker.date.recent({ days: 7 }).toISOString(),
            reactions: db.reactions.create(),
          });
        });
    });
};

export const serializeUser = (user: UserEntity): User => ({
  id: user.id,
  name: user.name,
});

export const serializePost = (post: PostEntity): Post => ({
  id: post.id,
  title: post.title,
  content: post.content,
  date: post.date,
  user: post.user?.id ?? "",
  reactions: {
    thumbsUp: post.reactions?.thumbsUp ?? 0,
    hooray: post.reactions?.hooray ?? 0,
    heart: post.reactions?.heart ?? 0,
    rocket: post.reactions?.rocket ?? 0,
    eyes: post.reactions?.eyes ?? 0,
  },
});
