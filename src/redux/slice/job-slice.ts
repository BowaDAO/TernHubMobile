import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  startAt,
} from "firebase/firestore";
import { db } from "../../../server/firebase/config";
import { jobType } from "../../types/type";

interface InitialJobStateType {
  jobs: jobType[];
  status: string;
  error: undefined | string;
  queriedJobs: jobType[];
}

const initialState: InitialJobStateType = {
  jobs: [],
  status: "idle",
  error: null || "",
  queriedJobs: [],
};

export const getJobs = createAsyncThunk("job/getJobs", async () => {
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
    return error;
  }
});

export const getJobsByUserQuery = createAsyncThunk(
  "job/getJobsByUserQuery",
  async (searchQuery: string) => {
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
      return error;
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
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
        state.error = action.error.message;
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
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
