import { CHECK_INPUTS } from "./actions";

const initialState = ["", "", "", "", "", ""];

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_INPUTS:
      return state[passId - 1];
    default:
      return state;
  }
};

// pull array into store, check passId-2 to see if disabled or not
