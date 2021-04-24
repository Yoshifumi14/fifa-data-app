import { createSlice } from "@reduxjs/toolkit";

type App = {};

const initialState: App = {};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
