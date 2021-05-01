import React from "react";
import { Chart } from "../../components/Chart";
import { useChartCondfigSelector, useQueryConditionSelector, usePlayerDataSelector } from "./ChartHooks";
import { chartCondfigChartTypeSelector } from "../../store/slice/chart/ChartConfigSelector";
import { ChartTypeSet } from "store/slice/chart/ChartConfig";
import { playerDataListByDataKeySelector } from "../../store/slice/data/player/PlayerDataSelector";
import {
  queryConditionAxisXSelector,
  queryConditionAxisYSelector,
} from "../../store/slice/query/QueryConditionSelector";

export const ChartRenderer = () => {
  const chartType = useChartCondfigSelector(chartCondfigChartTypeSelector);
  const xAxis = useQueryConditionSelector(queryConditionAxisXSelector);
  const xData = usePlayerDataSelector(playerDataListByDataKeySelector(xAxis ?? "age"));
  const yAxis = useQueryConditionSelector(queryConditionAxisYSelector);
  const yData = usePlayerDataSelector(playerDataListByDataKeySelector(yAxis ?? "overall"));
  return <Chart chartType={chartType ?? ChartTypeSet.LINE} xData={xData ?? []} yData={yData ?? []} />;
};
