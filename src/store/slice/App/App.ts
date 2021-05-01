import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  chartAccessorList: ChartAccessor[];
  editingChart: ChartAccessor | null;
};

export type ChartAccessor = {
  chartId: string;
  queryConditionId: string;
};

const initialState: AppState = {
  chartAccessorList: [],
  editingChart: null,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    addChartAccessor: (state, action: PayloadAction<{ chartAccessor: ChartAccessor }>) => {
      state.chartAccessorList.push(action.payload.chartAccessor);
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
    setEditingChart: (state, action: PayloadAction<{ editingChart: ChartAccessor | null }>) => {
      state.editingChart = action.payload.editingChart;
    },
  },
});

export const { addChartAccessor, deleteChartAccesser, setEditingChart } = appSlice.actions;
export default appSlice.reducer;
