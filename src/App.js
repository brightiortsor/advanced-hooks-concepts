import "./App.css";
import UserContext from "./components/useContext";
import HookCounter from "./components/useEffect";
import Counter from "./components/useState/counter";

function App() {
  return (
    <div className="App">
      <UserContext />
      <Counter />
      <HookCounter />
    </div>
  );
}

export default App;
