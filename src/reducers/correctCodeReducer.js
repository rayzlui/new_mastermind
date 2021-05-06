import {
  SET_SECRET_CODE,
  VERSUS_COMPUTER,
  START_PLAYER,
} from "../actions/actionTypes";

export function correctCodeReducer(state = null, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
      return null;
    case SET_SECRET_CODE:
    case START_PLAYER:
      return action.code_info;
    default:
      return state;
  }
}
