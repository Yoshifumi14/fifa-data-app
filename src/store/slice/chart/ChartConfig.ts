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
    setChartConfig: (state, action: PayloadAction<{ ChartConfigId: string; ChartConfig: ChartConfig }>) => {
      state.chartConfigMap[action.payload.ChartConfigId] = action.payload.ChartConfig;
    },
  },
});

export const { addInitialChartConfig, setChartConfig } = ChartConfigSlice.actions;
export default ChartConfigSlice.reducer;
