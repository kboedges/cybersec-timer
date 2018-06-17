import { DISABLE_ALL_INPUTS } from "./actions";

const initialState = "false";

export default (state = initialState, action) => {
  switch (action.type) {
    case DISABLE_ALL_INPUTS:
      return true;
    default:
      return state;
  }
};
