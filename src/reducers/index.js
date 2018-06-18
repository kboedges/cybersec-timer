import { combineReducers } from "redux";

// States
import timerStarted from "./timer";
import teamName from "./team-name";
import storedPasses from "./store-pass";
import inputsArray from "./inputs";
import date from "./date";
import timerColor from "./highlight-timer";
import inputsDisabled from "./disable-inputs";

export default combineReducers({
  timerStarted,
  teamName,
  storedPasses,
  inputsArray,
  date,
  timerColor,
  inputsDisabled
});
