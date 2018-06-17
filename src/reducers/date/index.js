import { MINUS_FIFTEEN } from "./actions";
import { GENERATE_DATE } from "./actions";

const startingTime = 5; // in hours
const conversion = 60 * 60 * 1000; // hours to miliseconds
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_DATE:
      return Date.now() + startingTime * conversion;
    case MINUS_FIFTEEN:
      return state - 15 * 60 * 1000;
    default:
      return state;
  }
};
