import { combineReducers } from "redux";
import { worldcase } from "./Case";
import { cases } from "./Case";
import { flag } from "./Case";

export const reducers = combineReducers({
  cases,
  worldcase,
  flag,
});
