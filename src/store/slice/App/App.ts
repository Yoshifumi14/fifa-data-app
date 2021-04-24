import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  queryConditonIdList: string[];
};

const initialState: AppState = {
  queryConditonIdList: [],
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    addQueryConditonId: (state, action: PayloadAction<{ queryConditonId: string }>) => {
      state.queryConditonIdList.push(action.payload.queryConditonId);
    },
  },
});

export const { addQueryConditonId } = appSlice.actions;
export default appSlice.reducer;
