import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  chartAccessorList: ChartAccessor[];
};

export type ChartAccessor = {
  chartId: string;
  queryConditonId: string;
};

const initialState: AppState = {
  chartAccessorList: [],
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    addChartAccessor: (state, action: PayloadAction<{ chartAccessor: ChartAccessor }>) => {
      state.chartAccessorList.push(action.payload.chartAccessor);
    },
  },
});

export const { addChartAccessor } = appSlice.actions;
export default appSlice.reducer;
