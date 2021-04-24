import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerData } from "../../../api/data/PlayerData";

type DataKey = keyof PlayerData;

type DataValue<T extends DataKey> = PlayerData[T];

export type QueryCondition = {
  axis: {
    x?: DataKey; // 横軸
    y: DataKey; // 縦軸
    z?: DataKey; // Z軸
  };
  filter: {
    target: DataKey;
    value: DataValue<DataKey>;
  }[];
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
      action: PayloadAction<{ queryConditionId: string; axis: QueryCondition["axis"] }>
    ) => {
      state.queryConditionMap[action.payload.queryConditionId] = {
        axis: action.payload.axis,
        filter: [],
      };
    },
    setQueryCondition: (state, action: PayloadAction<{ queryConditionId: string; queryCondition: QueryCondition }>) => {
      state.queryConditionMap[action.payload.queryConditionId] = action.payload.queryCondition;
    },
  },
});

export const { addInitialQueryCondition, setQueryCondition } = queryConditionSlice.actions;
export default queryConditionSlice.reducer;
