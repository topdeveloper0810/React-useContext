import React, { useContext } from "react";
import { MyContext } from "context/MyContext";

const MyComponent = () => {
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default MyComponent;
