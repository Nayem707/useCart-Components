import React, { useReducer } from "react";

const intState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, intState);

  const incre = () => dispatch("increment");
  const decre = () => dispatch("decrement");
  const rese = () => dispatch("reset");

  return (
    <div className="py-2">
      <h2>Count: ({count})</h2>
      <button onClick={incre}>Pluse+</button>
      <button onClick={decre}>Minuse-</button>
      <button onClick={rese}>reset</button>
    </div>
  );
};

export default Reducer;
