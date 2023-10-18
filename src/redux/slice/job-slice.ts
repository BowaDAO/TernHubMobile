import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../server/firebase/config";

const initialState = {
  jobs: [],
  status: "idle",
  error: null || "",
};

// id: string;
// company: string;
// role: string;
// logo: ImageSourcePropType;
// mode: string;
// time: string;
// location: string;

export const getJobs = createAsyncThunk("job/getJobs", async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "jobs"), orderBy("timeStamp", "desc"))
    );

    const data = querySnapshot.docs.map((doc) => ({
      //   ...doc.data(),
      id: doc.id,
      location: doc.get("companyLocation"),
      logo: doc.get("companyLogo"),
      company: doc.get("companyName"),
      description: doc.get("jobDescrption"),
      role: doc.get("jobTitle"),
      mode: doc.get("jobMode"),
      time: doc.get("timeStamp"),
    }));

    return data;
  } catch (error: any) {
    return error.message;
  }
});

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
        state.error = action.error.message as string;
      });
  },
});

export default jobSlice.reducer;