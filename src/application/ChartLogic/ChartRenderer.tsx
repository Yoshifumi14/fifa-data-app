import { PlayerDataKeys, PlayerData } from "api/data/PlayerData";
import { ChartTypeSet } from "store/slice/chart/ChartConfig";
import { playerDataListByDataKeySelector } from "store/slice/data/player/PlayerDataSelector";
import {
  queryConditionAxisXSelector,
  queryConditionAxisYSelector,
  queryConditionPositionSelector,
} from "store/slice/query/QueryConditionSelector";
import { queryConditionAxisZSelector } from "store/slice/query/QueryConditionSelector";
import { Chart } from "components/Chart";

import { useQueryConditionSelector, usePlayerDataSelector } from "./ChartHooks";

export const ChartRenderer = () => {
  const positionFilterFn = (position: string | undefined) => {
    if (position) {
      return (playerData: PlayerData) => playerData.playerPositions.includes(position);
    } else {
      return undefined;
    }
  };
  const position = useQueryConditionSelector(queryConditionPositionSelector);
  const xAxis = useQueryConditionSelector(queryConditionAxisXSelector);
  const xData = usePlayerDataSelector(
    playerDataListByDataKeySelector(xAxis ?? PlayerDataKeys.age, positionFilterFn(position))
  );
  const yAxis = useQueryConditionSelector(queryConditionAxisYSelector);
  const yData = usePlayerDataSelector(
    playerDataListByDataKeySelector(yAxis ?? PlayerDataKeys.overall, positionFilterFn(position))
  );
  const zAxis = useQueryConditionSelector(queryConditionAxisZSelector);
  const zData = usePlayerDataSelector(
    playerDataListByDataKeySelector(zAxis ?? PlayerDataKeys.shortName, positionFilterFn(position))
  );

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
