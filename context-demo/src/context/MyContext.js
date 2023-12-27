// import React, { useMemo, createContext, useCallback } from "react";
import React, { createContext, useContext, useReducer } from "react";

// Create a context with a default value (can be null)
// const MyContext = createContext(null);
const MyContext = createContext();

//Define a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  // Define a callback function
  // const handleButtonClick = useCallback(() => {
  //   console.log("Button clicked");
  // }, []);

  // Define the state ro data you want to share
  // const sharedData = "This is some shared data";

  // Memoize the context provider
  // const contextValue = useMemo(() => handleButtonClick, [handleButtonClick]);

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
