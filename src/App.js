import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,[action.name]: state[action.name] + 1,
      };
    case 'DECREMENT':
      return {
        ...state,[action.name]: state[action.name] - 1,
      };
    default: return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

const Context = createContext(null);

const useGlobalState = () => {
  const value = useContext(Context);
  if (value === null) throw new Error('Add GlobalProvider');
  return value;
};

const GlobalProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({ name }) => {
  const [state, dispatch] = useGlobalState();
  return (
    <div>
        
      <button onClick={() => dispatch({ type: 'INCREMENT', name })}>Increment +2</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', name })}>Increment +1</button>
      <button>{state[name]}</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', name })}>Decrement -1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', name })}>Decrement -2</button>
    </div>
  );
};

const App = () => (
  <GlobalProvider>
    <h1>useReducer Hook</h1>
    <h3>Count </h3>
    <Counter name="count1" />
  </GlobalProvider>
);

export default App;
