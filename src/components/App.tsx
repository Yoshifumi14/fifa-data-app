import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { deleteNationalPlayerData, getPlayerData } from "../store/slice/data/player/PlayerData";
import { playerDataListSelector } from "../store/slice/data/player/PlayerDataSelector";

export function App() {
  const dispatch = useDispatch();
  const playerDataListJapan = useSelector(playerDataListSelector("Japan"));
  const playerDataListEngland = useSelector(playerDataListSelector("England"));
  return (
    <div>
      <h3>app</h3>
      <div>
        <Button variant="contained" onClick={() => dispatch(getPlayerData({ nationality: "Japan" }))}>
          Japan
        </Button>
        <Button variant="contained" onClick={() => dispatch(getPlayerData({ nationality: "England" }))}>
          England
        </Button>
        <Button variant="outlined" onClick={() => dispatch(deleteNationalPlayerData())}>
          Clear
        </Button>
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
