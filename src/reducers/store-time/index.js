import { STORE_TIME } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_TIME:
      return action.time;
    default:
      return state;
  }
};
