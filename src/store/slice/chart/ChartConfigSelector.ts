import { RootState } from "../../Store";

export const chartConfigSelector = (chartId: string) => (state: RootState) => state.chartConfig.chartConfigMap[chartId];

export const chartCondfigChartTitleSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.chartTitle;

export const chartCondfigChartTypeSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.chartType;

export const chartCondfigXRangeSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.xRange;

export const chartCondfigYRangeSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.yRange;

export const chartCondfigXAxisTitleSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.xAxisTitle;

export const chartCondfigYAxisTitleSelector = (chartId: string) => (state: RootState) =>
  chartConfigSelector(chartId)(state)?.yAxisTitle;
