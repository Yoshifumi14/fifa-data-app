import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartAccessor } from "../store/slice/app/App";
import { ChartContext } from "./ChartLogic/ChartContext";
import { appEditingChartSelector } from "../store/slice/app/AppSelector";
import { nationalitySelector } from "../store/slice/data/player/PlayerDataSelector";
import { useChartCondfigSelector } from "./ChartLogic/ChartHooks";
import { chartCondfigChartTitleSelector } from "../store/slice/chart/ChartConfigSelector";

export const EditChartDrawer = () => {
  const editingChartAccesser = useSelector(appEditingChartSelector);
  if (editingChartAccesser) {
    return (
      <ChartContext.Provider value={editingChartAccesser}>
        {editingChartAccesser.chartId} / {editingChartAccesser.queryConditionId}
        <EditChartDrawerBody />
      </ChartContext.Provider>
    );
  } else {
    return null;
  }
};

const EditChartDrawerBody = () => {
  const title = useChartCondfigSelector(chartCondfigChartTitleSelector);
  return <div>{title}</div>;
};
