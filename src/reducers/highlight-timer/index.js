import { FLASH_RED } from "./actions";
import { CHANGE_GREEN } from "./actions";
import { CHANGE_DEFAULT } from "./actions";

const initialState = "default";

export default (state = initialState, action) => {
  switch (action.type) {
    case FLASH_RED:
      return "red";
    case CHANGE_GREEN:
      return "green";
    case CHANGE_DEFAULT:
      return "default";
    default:
      return state;
  }
};
