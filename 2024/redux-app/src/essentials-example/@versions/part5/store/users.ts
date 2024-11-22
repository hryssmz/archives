// essentials-example/store/users.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
}

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/fakeApi/users");
  const data = (await response.json()) as User[];
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const usersReducer = usersSlice.reducer;
