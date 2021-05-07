import {
  ADD_USER_MOVE,
  CHANGE_MODE,
  TWO_PLAYER_CHANGE_TURN,
  VERSUS_COMPUTER,
} from "../actions/actionTypes";

export function moveHistoryReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER_MOVE:
      let newState = state.slice();
      newState.push(action.move);
      return newState;
    case TWO_PLAYER_CHANGE_TURN:
    case VERSUS_COMPUTER:
    case CHANGE_MODE:
      return [];
    default:
      return state;
  }
}
