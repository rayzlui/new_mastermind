import { ADD_USER_MOVE, NEW_GAME } from "../actions/actionTypes";

export function moveHistoryReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER_MOVE:
      let newState = state.slice();
      newState.push(action.move);
      return newState;

    case NEW_GAME:
      return [];
    default:
      return state;
  }
}
