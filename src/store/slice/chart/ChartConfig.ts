import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const ChartTypeSet = {
  /** 折れ線 */
  LINE: "line",
  /** 棒 */
  BAR: "bar",
  /** 散布図 */
  SCATTER: "scatter",
} as const;

export type ChartType = typeof ChartTypeSet[keyof typeof ChartTypeSet];

export type ChartConfig = {
  chartTitle: string;
  chartType: ChartType;
  xRange?: number[];
  yRange?: number[];
  xAxisTitle?: string;
  yAxisTitle?: string;
};

export type ChartConfigState = {
  chartConfigMap: { [key in string]?: ChartConfig };
};

const initialState: ChartConfigState = {
  chartConfigMap: {},
};

export const ChartConfigSlice = createSlice({
  name: "ChartConfig",
  initialState,
  reducers: {
    addInitialChartConfig: (
      state,
      action: PayloadAction<{ chartId: string; chartTitle: string; chartType: ChartType }>
    ) => {
      state.chartConfigMap[action.payload.chartId] = {
        chartTitle: action.payload.chartTitle,
        chartType: action.payload.chartType,
      };
    },
    setChartConfig: (state, action: PayloadAction<{ chartId: string; ChartConfig: ChartConfig }>) => {
      state.chartConfigMap[action.payload.chartId] = action.payload.ChartConfig;
    },
    deleteChartConfig: (state, action: PayloadAction<{ chartId: string }>) => {
      delete state.chartConfigMap[action.payload.chartId];
    },
  },
});

export const { addInitialChartConfig, setChartConfig, deleteChartConfig } = ChartConfigSlice.actions;
export default ChartConfigSlice.reducer;
