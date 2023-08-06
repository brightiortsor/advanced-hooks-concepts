import { Button } from "@chakra-ui/react";
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>ReducerCounter</h1>
      <h2>Count: {count}</h2>
      <Button onClick={() => dispatch("increment")} colorScheme="green">
        INCREMENT
      </Button>
      <Button onClick={() => dispatch("decrement")} colorScheme="red">
        DECREMENT
      </Button>
      <Button onClick={() => dispatch("reset")} colorScheme="gray">
        RESET
      </Button>
    </div>
  );
};

export default ReducerCounter;
