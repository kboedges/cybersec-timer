import { combineReducers } from "redux";

// States
import passReducer from "./passReducer";
import timerStarted from "./timer";

export default combineReducers({
  passReducer,
  timerStartedReducer,
  timerStarted
});
