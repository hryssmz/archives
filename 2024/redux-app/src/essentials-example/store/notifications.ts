// essentials-example/store/notifications.ts
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { State } from ".";

export interface NotificationData {
  id: string;
  date: string;
  message: string;
  user: string;
}

export interface Notification extends NotificationData {
  read: boolean;
  isNew: boolean;
}

const notificationsAdapter = createEntityAdapter<Notification>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = notificationsAdapter.getInitialState();

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_params, { getState }) => {
    const allNotifications = selectAllNotifications(getState() as State);
    const latestNotification =
      allNotifications.length > 0 ? allNotifications[0] : undefined;
    const latestTimestamp = latestNotification?.date ?? "";
    const searchParams = new URLSearchParams();
    searchParams.append("since", latestTimestamp);
    const response = await fetch(`/fakeApi/notifications?${searchParams}`);
    const data = (await response.json()) as NotificationData[];
    return data;
  }
);

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    allNotificationsRead(state) {
      Object.values(state.entities).forEach(notification => {
        notification.read = true;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      const notifications = action.payload.map(notification => ({
        ...notification,
        read: false,
        isNew: true,
      }));
      notificationsAdapter.upsertMany(state, notifications);
      Object.values(state.entities).forEach(notification => {
        notification.isNew = !notification.read;
      });
    });
  },
});

export const notificationsReducer = notificationsSlice.reducer;
export const { allNotificationsRead } = notificationsSlice.actions;

export const { selectAll: selectAllNotifications } =
  notificationsAdapter.getSelectors((state: State) => state.notifications);
