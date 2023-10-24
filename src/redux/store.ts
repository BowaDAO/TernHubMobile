import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user-slice";
import jobSlice from "./slice/job-slice";
import bookmarksSlice from "./slice/bookmarks-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    bookmarks: bookmarksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
