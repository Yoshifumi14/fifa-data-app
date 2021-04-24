import { RootState } from "store/Store";

export const appSelector = (state: RootState) => state.app;
export const appHogeSelector = (state: RootState) => appSelector(state).hoge;
