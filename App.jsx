import GridWave from "./component/GridWave";
import "./App.css";
function App() {
  let row = 15;
  let col = 20;
  return (
    <>
      <GridWave rows={15} cols={20} />
    </>
  );
}

export default App;
