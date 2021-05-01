import { ChartAccessor } from "./App";

export const chartAccessorEqultyFn = (left: ChartAccessor | null, right: ChartAccessor | null) =>
  left?.chartId === right?.chartId && left?.queryConditionId === right?.queryConditionId;
