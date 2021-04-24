import { RootState } from "store/Store";

export const appSelector = (state: RootState) => state.app;
export const appQueryConditonIdListSelector = (state: RootState) => appSelector(state).queryConditonIdList;
