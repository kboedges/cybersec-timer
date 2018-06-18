import { START_TIMER } from "./actions";

const initialState = localStorage.getItem("timerStarted") ? localStorage.getItem("timerStarted") : false;

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return true;
    default:
      return state;
  }
};
