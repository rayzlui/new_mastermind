import {
  ADD_USER_MOVE,
  HINT_GIVEN,
  START_PLAYER,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../actions/actionTypes";
const initialState = {
  numbersGuessed: 0,
  board: new Array(4),
  hints: {},
  hintCount: 0,
};

export function userBoardReducer(state = initialState, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
    case VERSUS_PLAYER:
    case START_PLAYER:
      let { codeLength } = action;
      let newBoard = new Array(codeLength).fill(0);
      return { numbersGuessed: 0, board: newBoard, hints: {}, hintCount: 0 };
    case USER_INPUT:
      let { selectedCodeIndex, codeInput } = action;
      let copyBoard = state.board.slice();
      let copyNumsGuessed = state.numbersGuessed;
      if (copyBoard[selectedCodeIndex] === 0) {
        copyNumsGuessed++;
      }
      copyBoard[selectedCodeIndex] = codeInput;
      return Object.assign({}, state, {
        numbersGuessed: copyNumsGuessed,
        board: copyBoard,
      });
    case HINT_GIVEN:
      let { hint } = action;
      let { index, value } = hint;
      let nextHint = Object.assign({}, state.hints);
      nextHint[index] = value;
      let nextHintCount = state.hintCount + 1;
      let nextNumsGuessed = state.board[index]
        ? state.numbersGuessed
        : state.numbersGuessed + 1;
      let updateBoard = state.board.slice();
      updateBoard[index] = value;
      return Object.assign({}, state, {
        hints: nextHint,
        hintCount: nextHintCount,
        numbersGuessed: nextNumsGuessed,
        board: updateBoard,
      });
    case ADD_USER_MOVE:
      //since we're leaving hints in players guess, we need to track hintCount to allow submit button to work.
      let nextBoard = new Array(action.move.moves.length).fill(0);
      for (let index in state.hints) {
        nextBoard[index] = state.hints[index];
      }
      return Object.assign({}, state, {
        numbersGuessed: state.hintCount,
        board: nextBoard,
      });
    default:
      return state;
  }
}
