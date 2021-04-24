import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./slice/App/App";
import playerDataReducer from "./slice/Data/PlayerData/PlayerData";

export const store = configureStore({
  reducer: {
    app: appReducer,
    playerData: playerDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
