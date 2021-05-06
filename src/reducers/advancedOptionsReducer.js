import {
  ADD_USER_MOVE,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
  ADD_ANOTHER_TURN,
} from "../actions/actionTypes";

const intialState = {
  computer: null,
  codeLength: null,
  codeOptions: null,
  turnsAllowed: null,
  turnsMade: 0,
  timeAllowed: null,
};

export function advancedOptionsReducer(state = intialState, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
      return Object.assign({}, state, {
        computer: true,
        codeLength: action.codeLength,
        codeOptions: action.codeOptions,
        turnsMade: 0,
        turnsAllowed: action.turnsAllowed,
        timeAllowed: action.timeAllowed,
      });
    case VERSUS_PLAYER:
      return Object.assign({}, state, {
        computer: false,
        codeLength: action.codeLength,
        codeOptions: action.codeOptions,
        turnsMade: 0,
        turnsAllowed: action.turnsAllowed,
        timeAllowed: action.timeAllowed,
      });
    case ADD_USER_MOVE:
      let turnsMade = state.turnsMade + 1;
      return Object.assign({}, state, { turnsMade: turnsMade });
    case ADD_ANOTHER_TURN:
      let addTurn = state.turnsAllowed + action.turns;
      return Object.assign({}, state, { turnsAllowed: addTurn });
    default:
      return state;
  }
}
