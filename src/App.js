import "./App.css";
import { ChildA } from "./Components/Context/ContextChildren";
import { ContextParent } from "./Components/Context/ContextParent";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
