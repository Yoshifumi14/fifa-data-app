import React from "react";
import { ChartAccessor } from "../../store/slice/app/App";

export const ChartContext = React.createContext<ChartAccessor>({
  chartId: "",
  queryConditionId: "",
});
