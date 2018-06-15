import { combineReducers } from "redux";

// States
import timerStarted from "./timer";
import teamName from "./team-name";

export default combineReducers({
  timerStarted,
  teamName
});
