import { useSelector, useDispatch } from "react-redux";
import { setHoge } from "store/slice/App";
import { appHogeSelector } from "../store/slice/AppSelector";

export function App() {
  const hoge = useSelector(appHogeSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>app / {hoge}</h3>
      <div>
        <button onClick={() => dispatch(setHoge({ hoge: "hoge" }))}>Hoge</button>
        <button onClick={() => dispatch(setHoge({ hoge: "" }))}>Clear</button>
      </div>
    </div>
  );
}

export default App;
