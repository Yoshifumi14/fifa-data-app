import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  chartAccessorList: ChartAccessor[];
  drawerOpen: boolean;
};

export type ChartAccessor = {
  chartId: string;
  queryConditionId: string;
};

const initialState: AppState = {
  chartAccessorList: [],
  drawerOpen: false,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    addChartAccessor: (state, action: PayloadAction<{ chartAccessor: ChartAccessor }>) => {
      state.chartAccessorList.push(action.payload.chartAccessor);
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { addChartAccessor, setDrawerOpen } = appSlice.actions;
export default appSlice.reducer;
