import { combineReducers } from "redux";

// States
import timerStarted from "./timer";
import teamName from "./team-name";
import passwords from "./passwords";

export default combineReducers({
  timerStarted,
  teamName,
  passwords
});
