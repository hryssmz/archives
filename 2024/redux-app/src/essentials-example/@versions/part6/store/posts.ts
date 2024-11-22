// essentials-example/store/posts.ts
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
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

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

interface PostsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: undefined,
} as PostsState);

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
      const { id, title, content } = action.payload;
      const existingPost = state.entities[id];
      if (existingPost !== undefined) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action: PayloadAction<AddReaction>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
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
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, postsAdapter.addOne);
  },
});

export const postsReducer = postsSlice.reducer;
export const { postUpdated, reactionAdded } = postsSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: State) => state.posts);

export const selectPostsByUser = createSelector(
  [selectAllPosts, (_state: State, userId?: string) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
);
