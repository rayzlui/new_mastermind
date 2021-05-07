import { SET_SCREEN_CHANGE, START_TURN } from "../actions/actionTypes";

export function turnChangeReducer(state = false, action) {
  switch (action.type) {
    case START_TURN:
      return false;
    case SET_SCREEN_CHANGE:
      return true;
    default:
      return state;
  }
}
