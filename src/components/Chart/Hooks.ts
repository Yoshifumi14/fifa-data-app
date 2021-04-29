import { ChartType, ChartTypeSet } from "./Chart";

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
