import { CounterReducer } from "./CounterReducer";
import { LoginReducer } from "./LoginReducer";
import { userReducer } from "./UserReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: LoginReducer,
  userData: userReducer,
});
