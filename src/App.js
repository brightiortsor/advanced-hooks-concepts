import "./App.css";
import HookCounter from "./components/useEffect";
import Counter from "./components/useState/counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
    </div>
  );
}

export default App;
