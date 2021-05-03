import { NATIONALITY_TYPE, DataKey, PlayerData } from "api/data/PlayerData";
import { RootState } from "store/Store";

// todo: 必要になったらメモ化する、現状パフォーマンス劣化するほどでもないので不要
// 参考: reselect https://github.com/reduxjs/reselect

const playerDataSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  state.playerData.nationalPlayerData[nationalityKey];

export const nationalitySelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.nationality;

export const playerDataListSelector = (nationalityKey: NATIONALITY_TYPE) => (state: RootState) =>
  playerDataSelector(nationalityKey)(state)?.playerDataList;

export const playerDataListByDataKeySelector = (dataKey: DataKey) => (nationalityKey: NATIONALITY_TYPE) => (
  state: RootState
) => playerDataListSelector(nationalityKey)(state)?.map((playerData) => playerData[dataKey]);

export const filterPlayerDataListSelector = (filter: (playerData: PlayerData) => boolean) => (
  nationalityKey: NATIONALITY_TYPE
) => (state: RootState) => playerDataSelector(nationalityKey)(state)?.playerDataList.filter(filter);
