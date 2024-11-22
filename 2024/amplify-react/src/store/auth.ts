// store/auth.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as amplifyAuth from "aws-amplify/auth";
import type { AuthUser } from "aws-amplify/auth";

export interface AuthState {
  user?: AuthUser;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: AuthState = {
  user: undefined,
  status: "idle",
  error: undefined,
};

export interface SignUpArgs {
  username: string;
  password: string;
  email: string;
}

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    const user = await amplifyAuth.getCurrentUser().catch((error: Error) => {
      switch (error.name) {
        case "UserUnAuthenticatedException": {
          return undefined;
        }
        default: {
          console.error(error);
          throw error;
        }
      }
    });
    return user;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.status = "loading";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.error = undefined;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
