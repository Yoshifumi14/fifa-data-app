import React from "react";
import { useDispatch } from "react-redux";

import { deleteChartConfig } from "store/slice/chart/ChartConfig";
import { chartCondfigChartTitleSelector } from "store/slice/chart/ChartConfigSelector";
import { deleteChartAccesser, setDrawerOpen } from "store/slice/app/App";
import { deleteQueryCondition } from "store/slice/query/QueryCondition";
import { PaperContainer } from "../../components/PaperContainer/PaperContainer";
import { useChartCondfigSelector } from "./ChartHooks";
import { ChartContext } from "./ChartContext";
import { ChartRenderer } from "./ChartRenderer";

export const ChartPaper = () => {
  const title = useChartCondfigSelector(chartCondfigChartTitleSelector);
  const dispatch = useDispatch();
  const { chartId, queryConditionId } = React.useContext(ChartContext);
  const onDelete = () => {
    dispatch(deleteChartAccesser({ chartAccessor: { chartId, queryConditionId } }));
    dispatch(deleteQueryCondition({ queryConditionId }));
    dispatch(deleteChartConfig({ chartId }));
  };
  return (
    <PaperContainer title={title ?? "untitled"} onEdit={() => dispatch(setDrawerOpen(true))} onDelete={onDelete}>
      <ChartRenderer />
    </PaperContainer>
  );
};
