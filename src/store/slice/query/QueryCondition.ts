import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataKey, NATIONALITY_TYPE } from "api/data/PlayerData";

export type QueryCondition = {
  nationality: NATIONALITY_TYPE;
  axis: {
    x?: DataKey; // 横軸
    y: DataKey; // 縦軸
    z?: DataKey; // Z軸
  };
  position?: string;
};

export type QueryConditionState = {
  queryConditionMap: { [key in string]?: QueryCondition };
};

const initialState: QueryConditionState = {
  queryConditionMap: {},
};

export const queryConditionSlice = createSlice({
  name: "QueryCondition",
  initialState,
  reducers: {
    addInitialQueryCondition: (
      state,
      action: PayloadAction<{ queryConditionId: string; nationality: NATIONALITY_TYPE; axis: QueryCondition["axis"] }>
    ) => {
      state.queryConditionMap[action.payload.queryConditionId] = {
        nationality: action.payload.nationality,
        axis: action.payload.axis,
      };
    },
    setQueryCondition: (state, action: PayloadAction<{ queryConditionId: string; queryCondition: QueryCondition }>) => {
      state.queryConditionMap[action.payload.queryConditionId] = action.payload.queryCondition;
    },
    setQueryConditionNationality: (
      state,
      action: PayloadAction<{ queryConditionId: string; nationality: NATIONALITY_TYPE }>
    ) => {
      const queryCondition = state.queryConditionMap[action.payload.queryConditionId];
      if (queryCondition) {
        queryCondition.nationality = action.payload.nationality;
      }
    },
    setQueryConditionAxis: (
      state,
      action: PayloadAction<{ queryConditionId: string; axis: QueryCondition["axis"] }>
    ) => {
      const queryCondition = state.queryConditionMap[action.payload.queryConditionId];
      if (queryCondition) {
        queryCondition.axis = action.payload.axis;
      }
    },
    setQueryConditionPosition: (state, action: PayloadAction<{ queryConditionId: string; position: string }>) => {
      const queryCondition = state.queryConditionMap[action.payload.queryConditionId];
      if (queryCondition) {
        queryCondition.position = action.payload.position;
      }
    },
    deleteQueryCondition: (state, action: PayloadAction<{ queryConditionId: string }>) => {
      delete state.queryConditionMap[action.payload.queryConditionId];
    },
  },
});

export const {
  addInitialQueryCondition,
  setQueryCondition,
  setQueryConditionNationality,
  deleteQueryCondition,
  setQueryConditionAxis,
  setQueryConditionPosition,
} = queryConditionSlice.actions;
export default queryConditionSlice.reducer;
