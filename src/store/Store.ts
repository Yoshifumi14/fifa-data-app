import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./slice/app/App";
import playerDataReducer from "./slice/data/player/PlayerData";
import queryConditionReducer from "./slice/query/QueryCondition";

export const store = configureStore({
  reducer: {
    app: appReducer,
    playerData: playerDataReducer,
    queryCondition: queryConditionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
