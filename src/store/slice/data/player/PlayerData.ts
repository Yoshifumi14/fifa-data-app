import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerData, requestPlayerDataList, NATIONALITY_TYPE } from "api/data/PlayerData";
import { RootState } from "../../../Store";

export type PlayerDataState = {
  nationalPlayerData: {
    [key in NATIONALITY_TYPE]?: {
      nationality: NATIONALITY_TYPE;
      playerDataList: PlayerData[];
    };
  };
};

export const getPlayerData = createAsyncThunk<
  { playerDataList: PlayerData[] | null },
  { nationality: NATIONALITY_TYPE }
>("api/PlayerData", async ({ nationality }, thunkAPI) => {
  const nationalPlayerData = (thunkAPI.getState() as RootState).playerData.nationalPlayerData[nationality];
  if (nationalPlayerData === undefined) {
    const playerDataList = await requestPlayerDataList(nationality);
    return { playerDataList };
  } else {
    return { playerDataList: null };
  }
});

const initialState: PlayerDataState = { nationalPlayerData: {} };

export const playerDataSlice = createSlice({
  name: "PlayerData",
  initialState,
  reducers: {
    deleteNationalPlayerData: (state) => {
      state.nationalPlayerData = {};
    },
    deletePlayerData: (state, action: PayloadAction<{ nationality: NATIONALITY_TYPE }>) => {
      delete state.nationalPlayerData[action.payload.nationality];
    },
  },
  extraReducers: (builder) => {
    // メモ: https://redux-toolkit.js.org/api/createAsyncThunk#examples
    builder.addCase(getPlayerData.fulfilled, (state, action) => {
      const nationality = action.meta.arg.nationality;
      const playerDataList = action.payload.playerDataList;
      if (playerDataList) {
        state.nationalPlayerData[nationality] = {
          nationality,
          playerDataList,
        };
      }
    });
  },
});

export const { deleteNationalPlayerData, deletePlayerData } = playerDataSlice.actions;
export default playerDataSlice.reducer;
