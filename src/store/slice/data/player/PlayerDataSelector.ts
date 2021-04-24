import { RootState } from "store/Store";
import { NATIONALITY_TYPE } from "api/data/PlayerData";

export const playerDataSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  state.playerData.nationalPlayerData[nationalityKey];

export const nationalitySelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.nationality;

export const playerDataListSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.playerDataList;
