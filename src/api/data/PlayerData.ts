import { axiosInstanceOnFlask } from "api/FlaskClient";

export type PlayerData = {
  playerUrl: string;
  shortName: string;
  age: number;
  nationality: string;
  overall: number;
  potential: number;
  valueEur: number;
  wageEur: number;
  playerPositions: string;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physic: number;
};

export type DataKey = keyof PlayerData;

export type DataValue<T extends DataKey> = PlayerData[T];

type PlayerDataKeysType = {
  [key in DataKey]: DataKey;
};

export const PlayerDataKeys: PlayerDataKeysType = {
  playerUrl: "playerUrl",
  shortName: "shortName",
  age: "age",
  nationality: "nationality",
  overall: "overall",
  potential: "potential",
  valueEur: "valueEur",
  wageEur: "wageEur",
  playerPositions: "playerPositions",
  pace: "pace",
  shooting: "shooting",
  passing: "passing",
  dribbling: "dribbling",
  defending: "defending",
  physic: "physic",
} as const;

export const NATIONALITY = {
  Japan: "Japan",
  Korea: "Korea Republic",
  England: "England",
  Wales: "Wales",
  Spain: "Spain",
  Italy: "Italy",
  France: "France",
  Germany: "Germany",
  Croatia: "Croatia",
  Netherlands: "Netherlands",
  Belgium: "Belgium",
  Portugal: "Portugal",
  Senegal: "Senegal",
  IvoryCoast: "Ivory Coast",
  Argentina: "Argentina",
  Brazil: "Brazil",
  Uruguay: "Uruguay",
  Colombia: "Colombia",
  Chile: "Chile",
  Mexico: "Mexico",
} as const;

export type NATIONALITY_TYPE = typeof NATIONALITY[keyof typeof NATIONALITY];

export function requestPlayerDataList(nationality: NATIONALITY_TYPE): Promise<PlayerData[]> {
  return axiosInstanceOnFlask
    .get("/players?nationality=" + nationality)
    .then((res) => res.data)
    .then((dataList) => {
      return dataList.map((data: any) => toPlayerData(data));
    });
}

function toPlayerData(data: any): PlayerData {
  const playerData: PlayerData = {
    playerUrl: data.player_url,
    shortName: data.short_name,
    age: data.age,
    nationality: data.nationality,
    overall: data.overall,
    potential: data.potential,
    valueEur: data.value_eur,
    wageEur: data.wage_eur,
    playerPositions: data.player_positions,
    pace: data.pace,
    shooting: data.shooting,
    passing: data.passing,
    dribbling: data.dribbling,
    defending: data.defending,
    physic: data.physic,
  };
  return playerData;
}
