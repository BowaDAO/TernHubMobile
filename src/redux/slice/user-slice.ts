import { createSlice } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";
import * as SecureStore from "expo-secure-store";

const getUser = async () => {
  const token = await SecureStore.getItemAsync("refreshToken");

  if (token) {
    return jwtDecode<JwtPayload>(token);
  } else {
    return null;
  }
};

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;
