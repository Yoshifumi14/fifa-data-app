import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteChartConfig } from "store/slice/chart/ChartConfig";
import { chartCondfigChartTitleSelector } from "store/slice/chart/ChartConfigSelector";
import { deleteChartAccesser, setEditingChart } from "store/slice/app/App";
import { deleteQueryCondition } from "store/slice/query/QueryCondition";
import { PaperContainer } from "components/PaperContainer/PaperContainer";
import { useChartCondfigSelector } from "./ChartHooks";
import { ChartContext } from "./ChartContext";
import { ChartRenderer } from "./ChartRenderer";
import { isEditingChartByAccessorSelector } from "../../store/slice/app/AppSelector";

export const ChartPaper = () => {
  const dispatch = useDispatch();
  const { chartId, queryConditionId } = React.useContext(ChartContext);
  const isEditingThisChart = useSelector(isEditingChartByAccessorSelector({ chartId, queryConditionId }));
  const onEdit = () => {
    dispatch(setEditingChart({ editingChart: { chartId, queryConditionId } }));
  };
  const onDelete = () => {
    dispatch(deleteChartAccesser({ chartAccessor: { chartId, queryConditionId } }));
    dispatch(deleteQueryCondition({ queryConditionId }));
    dispatch(deleteChartConfig({ chartId }));
    if (isEditingThisChart) {
      dispatch(setEditingChart({ editingChart: null }));
    }
  };
  const title = useChartCondfigSelector(chartCondfigChartTitleSelector);
  return (
    <PaperContainer
      title={title !== "" ? title : "untitled"}
      onEdit={onEdit}
      onDelete={onDelete}
      isEditing={isEditingThisChart}
    >
      <ChartRenderer />
    </PaperContainer>
  );
};
