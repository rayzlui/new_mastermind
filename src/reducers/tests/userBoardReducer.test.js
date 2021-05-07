import {
  HINT_GIVEN,
  SET_SCREEN_CHANGE,
  START_PLAYER,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { userBoardReducer } from "../userBoardReducer";

describe("userBoardReducer", () => {
  it("should not change initial", () => {
    let intialState = {
      numbersGuessed: 0,
      board: [],
      hints: {},
      hintCount: 0,
    };
    let action = { type: SET_SCREEN_CHANGE };
    let reducer = userBoardReducer(intialState, action);
    expect(reducer).toEqual(intialState);
  });
  it("should change initial", () => {
    let initialState = {
      numbersGuessed: 4,
      board: [3, 4, 3, 2],
      hints: { 0: 3 },
      hintCount: 1,
    };
    let action = { type: VERSUS_PLAYER, codeLength: 7 };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(0);
    expect(board.length).toEqual(action.codeLength);
    expect(Object.entries(hints).length).toEqual(0);
    expect(hintCount).toEqual(0);
  });
  it("should change initial", () => {
    let initialState = {
      numbersGuessed: 4,
      board: [3, 4, 3, 2],
      hints: { 0: 3 },
      hintCount: 1,
    };
    let action = { type: START_PLAYER, codeLength: 7 };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(0);
    expect(board.length).toEqual(action.codeLength);
    expect(Object.entries(hints).length).toEqual(0);
    expect(hintCount).toEqual(0);
  });
  it("should change initial", () => {
    let mockBoard = [3, 4, 3, 2, 9, 0, 0, 0];
    let initialState = {
      numbersGuessed: 5,
      board: mockBoard,
      hints: { 0: 3 },
      hintCount: 1,
    };
    let action = { type: VERSUS_COMPUTER, codeLength: 7 };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(0);
    expect(board.length).toEqual(action.codeLength);
    expect(Object.entries(hints).length).toEqual(0);
    expect(hintCount).toEqual(0);
  });
  it("should change initial", () => {
    let mockBoard = [3, 4, 3, 2, 9, 0, 0, 0];
    let initialState = {
      numbersGuessed: 5,
      board: mockBoard,
      hints: { 0: 3 },
      hintCount: 1,
    };
    let action = { type: USER_INPUT, selectedCodeIndex: 3, codeInput: 9 };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(5);
    expect(board.length).toEqual(mockBoard.length);
    expect(Object.entries(hints).length).toEqual(1);
    expect(hintCount).toEqual(1);
    for (let i = 0; i < board.length; i++) {
      if (i === action.selectedCodeIndex) {
        expect(board[action.selectedCodeIndex]).toEqual(9);
      } else {
        expect(board[i]).toEqual(mockBoard[i]);
      }
    }
  });
  it("should change initial", () => {
    let mockBoard = [3, 4, 3, 2, 9, 0, 0, 0];
    let initialState = {
      numbersGuessed: 5,
      board: mockBoard,
      hints: { 0: 3 },
      hintCount: 1,
    };
    let action = { type: USER_INPUT, selectedCodeIndex: 7, codeInput: 6 };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(6);
    expect(board.length).toEqual(mockBoard.length);
    expect(Object.entries(hints).length).toEqual(1);
    expect(hintCount).toEqual(1);
    for (let i = 0; i < board.length; i++) {
      if (i === action.selectedCodeIndex) {
        expect(board[action.selectedCodeIndex]).toEqual(6);
      } else {
        expect(board[i]).toEqual(mockBoard[i]);
      }
    }
  });
  it("should change initial", () => {
    let mockBoard = [3, 4, 3, 2, 9, 0, 0, 0];
    let initialState = {
      numbersGuessed: 5,
      board: mockBoard,
      hints: { 0: 3 },
      hintCount: 1,
    };
    let mockHint = { index: 1, value: 8 };
    let action = { type: HINT_GIVEN, hint: mockHint };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(5);
    expect(board.length).toEqual(mockBoard.length);
    expect(Object.entries(hints).length).toEqual(2);
    expect(hintCount).toEqual(2);
    for (let i = 0; i < board.length; i++) {
      if (i === mockHint.index) {
        expect(board[mockHint.index]).toEqual(mockHint.value);
      } else {
        expect(board[i]).toEqual(mockBoard[i]);
      }
    }
  });
  it("should change initial", () => {
    let mockBoard = [3, 0, 0, 0, 9, 0, 0, 0];
    let initialState = {
      numbersGuessed: 2,
      board: mockBoard,
      hints: { 0: 3 },
      hintCount: 1,
    };
    let mockHint = { index: 1, value: 5 };
    let action = { type: HINT_GIVEN, hint: mockHint };
    let reducer = userBoardReducer(initialState, action);
    expect(reducer).not.toEqual(initialState);
    let { numbersGuessed, board, hints, hintCount } = reducer;
    expect(numbersGuessed).toEqual(3);
    expect(board.length).toEqual(mockBoard.length);
    expect(Object.entries(hints).length).toEqual(2);
    expect(hintCount).toEqual(2);
    for (let i = 0; i < board.length; i++) {
      if (i === mockHint.index) {
        expect(board[mockHint.index]).toEqual(mockHint.value);
      } else {
        expect(board[i]).toEqual(mockBoard[i]);
      }
    }
  });
});
