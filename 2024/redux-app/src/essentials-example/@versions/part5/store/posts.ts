// essentials-example/store/posts.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { State } from ".";

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

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: undefined,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("/fakeApi/posts");
  const data = (await response.json()) as Post[];
  return data;
});

export interface AddNewPost {
  title: string;
  content: string;
  user: string;
}

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (payload: AddNewPost) => {
    const response = await fetch("/fakeApi/posts", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as Post;
    return data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postUpdated(state, action: PayloadAction<UpdatePost>) {
      const { payload } = action;
      const post = state.posts.find(post => post.id === payload.id);
      if (post !== undefined) {
        post.title = payload.title;
        post.content = payload.content;
      }
    },
    reactionAdded(state, action: PayloadAction<AddReaction>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const { postUpdated, reactionAdded } = postsSlice.actions;

export const selectAllPosts = (state: State) => state.posts.posts;
export const selectPostById = (state: State, postId?: string) =>
  state.posts.posts.find(post => post.id === postId);
