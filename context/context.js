import { useReducer, createContext } from "react";
import { user } from "./reducers/user";
import { players } from "./reducers/players";
import { pot } from "./reducers/pot";
import { winners } from "./reducers/winners";
import { lotteryContract } from "./reducers/lotteryContract";
import { web3 } from "./reducers/web3";

// initial state
const initialState = {
  user: undefined,
  players: [],
  pot: '',
  winners: [],
  lotteryContract: undefined,
  web3: undefined
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(user, players, pot, winners, lotteryContract, web3), initialState); // pass more reducers if needed
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };