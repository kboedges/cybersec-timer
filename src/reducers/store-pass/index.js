import { STORE_PASS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PASS:
      return [...state, action.providedPass];
    default:
      return state;
  }
};
