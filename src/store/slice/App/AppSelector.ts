import { RootState } from "store/Store";

export const appSelector = (state: RootState) => state.app;
export const appChartAccessorListSelector = (state: RootState) => appSelector(state).chartAccessorList;
export const appDrawerOpenSelector = (state: RootState) => appSelector(state).drawerOpen;
