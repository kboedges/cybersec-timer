import { combineReducers } from "redux";

// States
import timerStarted from "./timer";
import teamName from "./team-name";
import passwords from "./passwords";
import storedPasses from "./store-pass";
import inputsArray from "./inputs";
import date from "./date";
import timerColor from "./highlight-timer";

export default combineReducers({
  timerStarted,
  teamName,
  passwords,
  storedPasses,
  inputsArray,
  date,
  timerColor
});
