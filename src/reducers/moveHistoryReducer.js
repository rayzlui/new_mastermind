import {
  ADD_USER_MOVE,
  NEW_GAME,
  TWO_PLAYER_CHANGE_TURN,
} from "../actions/actionTypes";

export function moveHistoryReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER_MOVE:
      let newState = state.slice();
      newState.push(action.move);
      return newState;

    case NEW_GAME:
    case TWO_PLAYER_CHANGE_TURN:
      return [];
    default:
      return state;
  }
}
