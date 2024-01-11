import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  jobType,
  JobToSaveType,
  BookmarksType,
  ErrorResponse,
} from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  setDoc,
  doc,
  deleteDoc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../server/firebase/config";
import { RootState } from "../store";

const initialState: BookmarksType = {
  bookmarkedJobs: [],
  status: "idle",
  error: null,
};

export const bookmarkAJob = createAsyncThunk(
  "bookmarks/bookmarkAJob",
  async (item: JobToSaveType, { getState, rejectWithValue }) => {
    const { id, ...jobInfo } = item;

    const state = getState() as RootState;

    const uid = state.user.user?.uid;

    try {
      await setDoc(doc(db, `users/${uid}/savedJobs`, `${id}`), {
        ...jobInfo,
      });
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong, please try again."
      );
    }
  }
);

export const unBookmarkAJob = createAsyncThunk(
  "bookmarks/unbookmarkAJob",
  async (id: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;

    const uid = state.user.user?.uid;

    try {
      await deleteDoc(doc(db, `users/${uid}/savedJobs`, `${id}`));
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong, please try again."
      );
    }
  }
);

export const getAUserBookmarkedJobs = createAsyncThunk(
  "bookmarks/getAUserBookmarkedJobs",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;

    const uid = state.user?.user?.uid;

    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, `users/${uid}/savedJobs`),
          orderBy("timeStamp", "desc")
        )
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        location: doc.get("companyLocation"),
        logo: doc.get("companyLogo"),
        company: doc.get("companyName"),
        description: doc.get("jobDescription"),
        role: doc.get("jobTitle"),
        mode: doc.get("jobMode"),
        time: doc.get("timeStamp"),
      }));

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Something went wrong, please try again."
      );
    }
  }
);

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    bookmarkAJob1: (state, action: PayloadAction<jobType>) => {
      state.bookmarkedJobs.push(action.payload);
    },
    unBookmarkAJob1: (state, action) => {
      state.bookmarkedJobs = state.bookmarkedJobs.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAUserBookmarkedJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAUserBookmarkedJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookmarkedJobs = action.payload;
      })
      .addCase(getAUserBookmarkedJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const { bookmarkAJob1, unBookmarkAJob1 } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
