import { RootState } from "store/Store";

export const queryConditionSelector = (queryConditionId: string) => (state: RootState) =>
  state.queryCondition.queryConditionMap[queryConditionId];

export const queryConditionAxisSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionSelector(queryConditionId)(state)?.axis;

export const queryConditionAxisXSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)?.x;

export const queryConditionAxisYSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)?.y;

export const queryConditionAxisZSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)?.z;

export const queryConditionFilterSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionSelector(queryConditionId)(state)?.filter;
