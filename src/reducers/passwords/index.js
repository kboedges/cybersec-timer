import { SET_PASSWORDS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORDS:
      return action.passwords;
    default:
      return state;
  }
};
