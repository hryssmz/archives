// essentials-example/mocks/browser.ts
import { setupWorker } from "msw/browser";
import {
  getFakeNotificationsHandler,
  getFakePostsHandler,
  getFakeUsersHandler,
  postFakePostsHandler,
} from "./handlers";

export const handlers = [
  getFakePostsHandler,
  postFakePostsHandler,
  getFakeUsersHandler,
  getFakeNotificationsHandler,
];

export const worker = setupWorker(...handlers);
