import { RootState } from "store/Store";

const queryConditionSelector = (queryConditionId: string) => (state: RootState) =>
  state.queryCondition.queryConditionMap[queryConditionId];

export const queryConditionNationalitySelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionSelector(queryConditionId)(state)!.nationality;

const queryConditionAxisSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionSelector(queryConditionId)(state)!.axis;

export const queryConditionAxisXSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)!.x;

export const queryConditionAxisYSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)!.y;

export const queryConditionAxisZSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionAxisSelector(queryConditionId)(state)!.z;

export const queryConditionPositionSelector = (queryConditionId: string) => (state: RootState) =>
  queryConditionSelector(queryConditionId)(state)!.position;
