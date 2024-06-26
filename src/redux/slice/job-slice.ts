import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
} from "@reduxjs/toolkit";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/server/firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserRecentSearchesFromAsyncStorage = async (): Promise<string[]> => {
  const recentSearchesString = await AsyncStorage.getItem("userRecentSearches");

  if (recentSearchesString) {
    const recentSearchesArray: string[] = JSON.parse(recentSearchesString);
    return recentSearchesArray;
  }

  return [];
};

const recentSearchesData = getUserRecentSearchesFromAsyncStorage();

interface InitialJobStateType {
  jobs: jobType[];
  status: string;
  error: null | string;
  queriedJobs: jobType[];
  recentSearches: string[];
}

const initialState: InitialJobStateType = {
  jobs: [],
  status: "idle",
  error: null,
  queriedJobs: [],
  recentSearches: [],
};

export const getJobs = createAsyncThunk(
  "job/getJobs",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "jobs"), orderBy("timeStamp", "desc"))
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
        error.message || "Something went wrong, please try again"
      );
    }
  }
);

export const getJobsByUserQuery = createAsyncThunk(
  "job/getJobsByUserQuery",
  async (searchQuery: string, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "jobs"), where("jobTitle", "==", searchQuery))
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
        error.message || "Something went wrong, please try again"
      );
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setRecentSearches: (state, action) => {
      state.recentSearches.push(action.payload);
    },
    removeRecentSearchTerm: (state, action) => {
      state.recentSearches = state.recentSearches.filter(
        (item) => item !== action.payload
      );
    },
    getJobByQuery: (state, action) => {
      state.queriedJobs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(getJobsByUserQuery.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getJobsByUserQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.queriedJobs = action.payload;
      })
      .addCase(getJobsByUserQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const { setRecentSearches, removeRecentSearchTerm, getJobByQuery } =
  jobSlice.actions;

export default jobSlice.reducer;
