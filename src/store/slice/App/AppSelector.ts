import { RootState } from "store/Store";
import { ChartAccessor } from "./App";

export const appSelector = (state: RootState) => state.app;
export const appChartAccessorListSelector = (state: RootState) => appSelector(state).chartAccessorList;
export const appEditingChartSelector = (state: RootState) => appSelector(state).editingChart;
export const isEditingChartByAccessorSelector = (thisChart: ChartAccessor) => (state: RootState) => {
  const editingChart = appEditingChartSelector(state);
  if (editingChart) {
    return thisChart.chartId === editingChart.chartId && thisChart.queryConditionId === editingChart.queryConditionId;
  } else {
    return false;
  }
};
export const isEditingChartSelector = (state: RootState) => appEditingChartSelector(state) != null;
