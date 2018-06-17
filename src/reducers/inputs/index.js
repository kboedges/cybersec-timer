import { UPDATE_INPUTS } from "./actions";

// Going with 7 here so that the first input can look to the [0] to enable
const initialState = [true, false, false, false, false, false, false];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUTS:
      return state.map((input, index) => (index === action.passId ? true : input));
    default:
      return state;
  }
};
