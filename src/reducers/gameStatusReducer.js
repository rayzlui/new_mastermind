import {
  GAME_WON,
  GAME_LOST,
  VERSUS_COMPUTER,
  START_PLAYER,
  ONE_MORE_CHANCE,
} from "../actions/actionTypes";

export function gameStatusReducer(state = false, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
    case START_PLAYER:
    case ONE_MORE_CHANCE:
      return true;
    case GAME_WON:
    case GAME_LOST:
      return false;

    default:
      return state;
  }
}
