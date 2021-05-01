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
    setChartConfigTitle: (state, action: PayloadAction<{ chartId: string; title: ChartConfig["chartTitle"] }>) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.chartTitle = action.payload.title;
      }
    },
    setChartConfigType: (state, action: PayloadAction<{ chartId: string; type: ChartConfig["chartType"] }>) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.chartType = action.payload.type;
      }
    },
    setChartConfigXRange: (state, action: PayloadAction<{ chartId: string; xRange: ChartConfig["xRange"] }>) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.xRange = action.payload.xRange;
      }
    },
    setChartConfigYRange: (state, action: PayloadAction<{ chartId: string; yRange: ChartConfig["yRange"] }>) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.yRange = action.payload.yRange;
      }
    },
    setChartConfigXAxisTitle: (
      state,
      action: PayloadAction<{ chartId: string; xAxisTitle: ChartConfig["xAxisTitle"] }>
    ) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.xAxisTitle = action.payload.xAxisTitle;
      }
    },
    setChartConfigYAxisTitle: (
      state,
      action: PayloadAction<{ chartId: string; yAxisTitle: ChartConfig["yAxisTitle"] }>
    ) => {
      const chartConfig = state.chartConfigMap[action.payload.chartId];
      if (chartConfig) {
        chartConfig.yAxisTitle = action.payload.yAxisTitle;
      }
    },
    deleteChartConfig: (state, action: PayloadAction<{ chartId: string }>) => {
      delete state.chartConfigMap[action.payload.chartId];
    },
  },
});

export const {
  addInitialChartConfig,
  setChartConfig,
  setChartConfigTitle,
  setChartConfigType,
  setChartConfigXRange,
  setChartConfigYRange,
  setChartConfigXAxisTitle,
  setChartConfigYAxisTitle,
  deleteChartConfig,
} = ChartConfigSlice.actions;
export default ChartConfigSlice.reducer;
