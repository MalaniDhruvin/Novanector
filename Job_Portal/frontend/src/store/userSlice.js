import { createSlice } from "@reduxjs/toolkit";

const InitialState = JSON.parse(localStorage.getItem("user"))|| null;
const userSlice = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("user");
    },
  },
});

export default userSlice;
export const userActions = userSlice.actions;
