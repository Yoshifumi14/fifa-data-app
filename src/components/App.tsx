import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { deleteNationalPlayerData, getPlayerData } from "../store/slice/data/player/PlayerData";
import { playerDataListSelector } from "../store/slice/data/player/PlayerDataSelector";

export function App() {
  const dispatch = useDispatch();
  const playerDataListJapan = useSelector(playerDataListSelector("Japan"));
  const playerDataListEngland = useSelector(playerDataListSelector("England"));
  return (
    <Container>
      <h3>app</h3>
      <div>
        <Button variant="contained" color="primary" onClick={() => dispatch(getPlayerData({ nationality: "Japan" }))}>
          Japan
        </Button>
        <Button variant="contained" color="primary" onClick={() => dispatch(getPlayerData({ nationality: "England" }))}>
          England
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => dispatch(deleteNationalPlayerData())}>
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
    </Container>
  );
}

export default App;
