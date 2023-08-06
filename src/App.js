import "./App.css";
import UserContext from "./components/useContext";
import HookCounter from "./components/useEffect";
import Counter from "./components/useState/counter";
import ReducerCounter from "./components/useReducer/ReducerCounter";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box my={"2rem"}>
        <h1>useContext</h1>
        <UserContext />
      </Box>
      <hr />
      <Box my={"2rem"}>
        <ReducerCounter />
      </Box>
      <hr />
      <Box my={"2rem"}>
        <h1>useState</h1>
        <Counter />
      </Box>
      <hr />
      <Box my={"2rem"}>
        <h1>useEffect</h1>
        <HookCounter />
      </Box>
    </div>
  );
}

export default App;
