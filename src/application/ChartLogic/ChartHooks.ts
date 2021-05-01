import React from "react";
import { useSelector } from "react-redux";

import { NATIONALITY_TYPE } from "api/data/PlayerData";
import { RootState } from "store/Store";
import { queryConditionNationalitySelector } from "store/slice/query/QueryConditionSelector";

import { ChartContext } from "./ChartContext";

export function useChartCondfigSelector<T>(selector: (chartId: string) => (state: RootState) => T) {
  const chartId = React.useContext(ChartContext).chartId;
  return useSelector(selector(chartId));
}

export function useQueryConditionSelector<T>(selector: (queryConditionId: string) => (state: RootState) => T) {
  const queryConditionId = React.useContext(ChartContext).queryConditionId;
  return useSelector(selector(queryConditionId));
}

export function usePlayerDataSelector<T>(selector: (nationality: NATIONALITY_TYPE) => (state: RootState) => T) {
  const nationality = useQueryConditionSelector(queryConditionNationalitySelector);
  if (nationality) {
    return useSelector(selector(nationality));
  } else {
    throw new Error("nationality is undefined");
  }
}
