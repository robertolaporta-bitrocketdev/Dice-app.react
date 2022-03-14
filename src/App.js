import "./App.css";
import { Clear } from "./Clear";
import { Inizio } from "./Dadi/Inizio";

function App() {
  return (
    <div className="App">
      <p> GIOCO DADI </p>
      <Clear />
      <br />
      <Inizio />
    </div>
  );
}

export default App;
