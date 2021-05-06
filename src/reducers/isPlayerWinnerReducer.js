import {
  GAME_WON,
  GAME_LOST,
  VERSUS_PLAYER,
  VERSUS_COMPUTER,
  CHANGE_MODE,
  ADD_ANOTHER_TURN,
} from "../actions/actionTypes";

export function isPlayerWinnerReducer(state = null, action) {
  switch (action.type) {
    case GAME_WON:
      return true;
    case GAME_LOST:
      return false;
    case VERSUS_PLAYER:
    case VERSUS_COMPUTER:
    case ADD_ANOTHER_TURN:
    case CHANGE_MODE:
      return null;
    default:
      return state;
  }
}
