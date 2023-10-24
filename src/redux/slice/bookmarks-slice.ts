import { createSlice } from "@reduxjs/toolkit";
import { jobType } from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";

interface BookmarksType {
  bookmarkedJobs: jobType[];
}

const initialState: BookmarksType = {
  bookmarkedJobs: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    bookmarkAJob: (state, action: PayloadAction<jobType>) => {
      state.bookmarkedJobs.push(action.payload);
    },
    unBookmarkAJob: (state, action) => {
      state.bookmarkedJobs = state.bookmarkedJobs.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { bookmarkAJob, unBookmarkAJob } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
