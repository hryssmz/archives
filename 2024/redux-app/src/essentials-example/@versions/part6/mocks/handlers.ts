// essentials-example/mocks/handlers.ts
import { nanoid } from "@reduxjs/toolkit";
import { parseISO } from "date-fns";
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { db, serializePost, serializeUser } from "./models";
import type { NotificationData } from "../store/notifications";
import type { AddNewPost, Post } from "../store/posts";
import type { User } from "../store/users";

const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));

export const getFakePostsHandler = http.get<object, object, Post[]>(
  "/fakeApi/posts",
  async () => {
    await sleep();
    const posts: Post[] = db.post.getAll().map(serializePost);
    return HttpResponse.json(posts);
  }
);

export const getFakeUsersHandler = http.get<object, object, User[]>(
  "/fakeApi/users",
  async () => {
    await sleep();
    const users: User[] = db.user.getAll().map(serializeUser);
    return HttpResponse.json(users);
  }
);

export const postFakePostsHandler = http.post<object, AddNewPost, Post>(
  "/fakeApi/posts",
  async ({ request }) => {
    await sleep();
    const { user: userId, content, title } = await request.json();
    console.log({ userId, content, title });
    if (content === "error") {
      throw HttpResponse.json("Server error saving this post!", {
        status: 500,
      });
    }
    const user = db.user.findFirst({ where: { id: { equals: userId } } });
    if (user === null) {
      throw HttpResponse.json(null, { status: 404 });
    }
    const post = db.post.create({
      date: new Date().toISOString(),
      content,
      title,
      user,
      reactions: db.reactions.create(),
    });
    const data: Post = serializePost(post);
    return HttpResponse.json(data);
  }
);

export const getFakeNotificationsHandler = http.get<
  object,
  object,
  NotificationData[]
>("/fakeApi/notifications", async ({ request }) => {
  await sleep();
  const notificationTemplates = [
    "poked you",
    "says hi!",
    "is glad we're friends",
    "sent you a gift",
  ];
  const url = new URL(request.url);
  const since = url.searchParams.get("since");
  const now = new Date();
  const fromDate = since
    ? parseISO(since)
    : new Date(now.valueOf() - 15 * 60 * 1000);
  const numNotifications = faker.number.int({ min: 1, max: 5 });
  const notifications = Array(numNotifications)
    .fill(0)
    .map(() => {
      const user = faker.helpers.arrayElement(db.user.getAll());
      const template = faker.helpers.arrayElement(notificationTemplates);
      return {
        id: nanoid(),
        date: faker.date.between({ from: fromDate, to: now }).toISOString(),
        message: template,
        user: user.id,
      };
    });
  return HttpResponse.json(notifications);
});
