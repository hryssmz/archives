// essentials-example/mocks/browser.ts
import { setupWorker } from "msw/browser";
import {
  getFakePostsHandler,
  getFakeUsersHandler,
  postFakePostsHandler,
} from "./handlers";

export const handlers = [
  getFakePostsHandler,
  postFakePostsHandler,
  getFakeUsersHandler,
];

export const worker = setupWorker(...handlers);
