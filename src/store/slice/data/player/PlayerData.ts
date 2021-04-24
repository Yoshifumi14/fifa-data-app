import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerData, requestPlayerDataList, NATIONALITY_TYPE } from "api/data/PlayerData";

export type PlayerDataState = {
  nationalPlayerData: {
    [key in NATIONALITY_TYPE]?: {
      nationality: NATIONALITY_TYPE;
      playerDataList: PlayerData[];
    };
  };
};

export const getPlayerData = createAsyncThunk<{ playerDataList: PlayerData[] }, { nationality: NATIONALITY_TYPE }>(
  "api/PlayerData",
  async ({ nationality }, thunkAPI) => {
    const playerDataList = await requestPlayerDataList(nationality);
    return { playerDataList: playerDataList };
  }
);

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
    builder.addCase(getPlayerData.fulfilled, (state, action) => {
      const nationality = action.meta.arg.nationality;
      const playerDataList = action.payload.playerDataList;
      state.nationalPlayerData[nationality] = {
        nationality,
        playerDataList,
      };
    });
  },
});

export const { deleteNationalPlayerData, deletePlayerData } = playerDataSlice.actions;
export default playerDataSlice.reducer;
