import { SET_TEAM_NAME } from "./actions";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM_NAME:
      return action.teamName;
    default:
      return state;
  }
};
