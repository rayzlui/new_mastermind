import {
  ADD_USER_MOVE,
  START_PLAYER,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../actions/actionTypes";
const initialState = {
  numbersGuessed: 0,
  board: new Array(4),
};

export function userBoardReducer(state = initialState, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
    case VERSUS_PLAYER:
    case START_PLAYER:
      let { codeLength } = action;
      let newBoard = new Array(codeLength);
      return { numbersGuessed: 0, board: newBoard };
    case USER_INPUT:
      let { selectedCodeIndex, codeInput } = action;
      let copyBoard = state.board.slice();
      let copyNumsGuessed = state.numbersGuessed;
      if (copyBoard[selectedCodeIndex] === undefined) {
        copyNumsGuessed++;
      }
      copyBoard[selectedCodeIndex] = codeInput;
      return Object.assign(
        {},
        {
          numbersGuessed: copyNumsGuessed,
          board: copyBoard,
        }
      );
    case ADD_USER_MOVE:
      let nextBoard = new Array(action.move.moves.length);
      return { numbersGuessed: 0, board: nextBoard };
    default:
      return state;
  }
}
