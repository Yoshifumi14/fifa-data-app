import { RootState } from "store/Store";
import { NATIONALITY_TYPE } from "api/data/PlayerData";
import { DataKey, PlayerData } from "../../../../api/data/PlayerData";

export const playerDataSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  state.playerData.nationalPlayerData[nationalityKey];

export const nationalitySelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.nationality;

export const playerDataListSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.playerDataList;

export const playerDataListByDataKeySelector = (dataKey: DataKey) => (nationalityKey: NATIONALITY_TYPE) => (
  state: RootState
) => playerDataSelector(nationalityKey)(state)?.playerDataList.map((playerData) => playerData[dataKey]);

export const filterPlayerDataListSelector = (filter: (playerData: PlayerData) => boolean) => (
  nationalityKey: NATIONALITY_TYPE
) => (state: RootState) => playerDataSelector(nationalityKey)(state)?.playerDataList.filter(filter);
