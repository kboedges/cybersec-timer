import { MINUS_FIFTEEN, GENERATE_DATE, STOP_TIMER } from "./actions";

const startingTime = 5; // in hours
const conversion = 60 * 60 * 1000; // hours to miliseconds = 60 * 60 * 1000 = 3600
const initialState = Date.now();

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_DATE:
      return Date.now();
    // return (
    //   (localStorage.getItem("startTime") ? parseInt(localStorage.getItem("startTime"), 10) : Date.now()) +
    //   startingTime * conversion
    // );
    case MINUS_FIFTEEN:
      return state - 15 * 60 * 1000;
    case STOP_TIMER:
      return Date.now();
    default:
      return state;
  }
};
