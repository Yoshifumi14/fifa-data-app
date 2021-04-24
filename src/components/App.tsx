import { useSelector, useDispatch } from "react-redux";
import { appHogeSelector } from "../store/slice/App/AppSelector";
import { deleteNationalPlayerData, getPlayerData } from "../store/slice/Data/PlayerData/PlayerData";
import { playerDataListSelector } from "../store/slice/Data/PlayerData/PlayerDataSelector";

export function App() {
  const hoge = useSelector(appHogeSelector);
  const dispatch = useDispatch();
  const playerDataListJapan = useSelector(playerDataListSelector("Japan"));
  const playerDataListEngland = useSelector(playerDataListSelector("England"));
  return (
    <div>
      <h3>app / {hoge}</h3>
      <div>
        <button onClick={() => dispatch(getPlayerData({ nationality: "Japan" }))}>Japan</button>
        <button onClick={() => dispatch(getPlayerData({ nationality: "England" }))}>England</button>
        <button onClick={() => dispatch(deleteNationalPlayerData())}>Clear</button>
        {playerDataListJapan?.map((player) => (
          <div>
            {player.shortName} {player.overall}
          </div>
        ))}
        {playerDataListEngland?.map((player) => (
          <div>
            {player.shortName} {player.overall}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
