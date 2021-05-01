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
    deleteChartAccesser: (state, action: PayloadAction<{ chartAccessor: ChartAccessor }>) => {
      state.chartAccessorList = state.chartAccessorList.filter(
        (acc) =>
          !(
            acc.chartId === action.payload.chartAccessor.chartId &&
            acc.queryConditionId === action.payload.chartAccessor.queryConditionId
          )
      );
    },
  },
});

export const { addChartAccessor, setDrawerOpen, deleteChartAccesser } = appSlice.actions;
export default appSlice.reducer;
