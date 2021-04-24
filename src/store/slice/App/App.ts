import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  hoge: string;
};

const initialState: AppState = {
  hoge: "",
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setHoge: (state, action: PayloadAction<{ hoge: string }>) => {
      state.hoge = action.payload.hoge;
    },
  },
});

export const { setHoge } = appSlice.actions;
export default appSlice.reducer;
