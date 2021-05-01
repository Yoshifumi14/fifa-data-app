import React from "react";

import { PlayerDataKeys } from "api/data/PlayerData";
import { ChartTypeSet } from "store/slice/chart/ChartConfig";
import { playerDataListByDataKeySelector } from "store/slice/data/player/PlayerDataSelector";
import { queryConditionAxisXSelector, queryConditionAxisYSelector } from "store/slice/query/QueryConditionSelector";
import { queryConditionAxisZSelector } from "store/slice/query/QueryConditionSelector";
import { Chart } from "components/Chart";

import { useQueryConditionSelector, usePlayerDataSelector } from "./ChartHooks";

export const ChartRenderer = () => {
  const xAxis = useQueryConditionSelector(queryConditionAxisXSelector);
  const xData = usePlayerDataSelector(playerDataListByDataKeySelector(xAxis ?? PlayerDataKeys.age));
  const yAxis = useQueryConditionSelector(queryConditionAxisYSelector);
  const yData = usePlayerDataSelector(playerDataListByDataKeySelector(yAxis ?? PlayerDataKeys.overall));
  const zAxis = useQueryConditionSelector(queryConditionAxisZSelector);
  const zData = usePlayerDataSelector(playerDataListByDataKeySelector(zAxis ?? PlayerDataKeys.shortName));
  return (
    <Chart
      chartType={ChartTypeSet.SCATTER}
      xData={xData ?? []}
      xAxisTitle={xAxis}
      yData={yData ?? []}
      yAxisTitle={yAxis}
      zData={zData}
    />
  );
};
