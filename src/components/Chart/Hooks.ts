import { ChartType, ChartTypeSet } from "store/slice/chart/ChartConfig";

export const useModeType = (chartType: ChartType) => {
  switch (chartType) {
    case ChartTypeSet.BAR:
      return {
        type: "bar",
      };
    case ChartTypeSet.LINE:
      return {
        type: "scatter",
      };
    case ChartTypeSet.SCATTER:
      return {
        mode: "markers",
        type: "scatter",
      };
  }
};
