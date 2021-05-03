import {
  ADD_USER_MOVE,
  SELECT_INPUT_SPOT,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../actions/actionTypes";

export function userSelectedReducer(state = null, action) {
  switch (action.type) {
    case SELECT_INPUT_SPOT:
      return action.index;
    case ADD_USER_MOVE:
    case USER_INPUT:
    case VERSUS_COMPUTER:
    case VERSUS_PLAYER:
      return null;
    default:
      return state;
  }
}
