import {
  SET_SECRET_CODE,
  VERSUS_COMPUTER,
  PLAYER_SET_SECRET_CODE,
} from "../actions/actionTypes";

export function correctCodeReducer(state = null, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
      return null;
    case SET_SECRET_CODE:
    case PLAYER_SET_SECRET_CODE:
      return action.code_info;
    default:
      return state;
  }
}
