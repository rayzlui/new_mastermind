import {
  ONE_PLAYER,
  TWO_PLAYER,
  TWO_PLAYER_CHANGE_TURN,
  TWO_PLAYER_UPDATE_SCORE,
} from "../actions/actionTypes";

export function versusModeReducer(state = null, action) {
  switch (action.type) {
    case TWO_PLAYER:
      return { playerNumTurn: 1, 1: 0, 2: 0 };
    case TWO_PLAYER_UPDATE_SCORE:
      let { playerNum, playerScore } = action;
      let nextState = Object.assign({}, state);
      if (playerScore === "add") {
        nextState[playerNum]++;
      } else {
        nextState[playerNum] = playerScore;
      }
      return nextState;
    case TWO_PLAYER_CHANGE_TURN:
      let nextTurn = state.playerNumTurn + 1;
      return Object.assign({}, state, { playerNumTurn: nextTurn });

    case ONE_PLAYER:
      return false;
    default:
      return state;
  }
}
