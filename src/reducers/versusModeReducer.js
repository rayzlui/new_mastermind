import { ONE_PLAYER, TWO_PLAYER } from "../actions/actionTypes";

export function versusModeReducer(state = null, action) {
  switch (action.type) {
    case TWO_PLAYER:
      return true;
    case ONE_PLAYER:
      return false;
    default:
      return state;
  }
}
