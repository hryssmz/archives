// essentials-example/store/posts.ts
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Reaction = "thumbsUp" | "hooray" | "heart" | "rocket" | "eyes";

export interface Post {
  id: string;
  title: string;
  content: string;
  user: string;
  date: string;
  reactions: Record<Reaction, number>;
}

type UpdatePost = Pick<Post, "id" | "title" | "content">;

interface AddReaction {
  postId: string;
  reaction: Reaction;
}

const initialReactions: Record<Reaction, number> = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};

const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { ...initialReactions },
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    user: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: { ...initialReactions },
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
            reactions: { ...initialReactions },
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<UpdatePost>) {
      const { payload } = action;
      const post = state.find(post => post.id === payload.id);
      if (post !== undefined) {
        post.title = payload.title;
        post.content = payload.content;
      }
    },
    reactionAdded(state, action: PayloadAction<AddReaction>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
