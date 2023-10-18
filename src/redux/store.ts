import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user-slice";
import jobSlice from "./slice/job-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
