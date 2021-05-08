import {
  ADD_USER_MOVE,
  CHANGE_MODE,
  TIMED_MODE,
  TWO_PLAYER_CHANGE_TURN,
  VERSUS_COMPUTER,
} from "../../actions/actionTypes";
import { moveHistoryReducer } from "../moveHistoryReducer";

describe("moveHistoryReducer", () => {
  it("should not change initial", () => {
    let initialState = [];
    let action = { type: TIMED_MODE };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should change add {previousMove: [2,3,4,5], redPegs: 3, whitePegs:0 } to array ", () => {
    let initialState = [];
    let mockMove = { previousMove: [2, 3, 4, 5], redPegs: 3, whitePegs: 0 };
    let action = { type: ADD_USER_MOVE, move: mockMove };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer[0]).toEqual(mockMove);
    expect(reducer).not.toEqual(initialState);
  });
  it("should change add {previousMove: [2,3,7,5], redPegs: 1, whitePegs:1 } to array", () => {
    let initialState = [
      { previousMove: [1, 7, 4, 2], redPegs: 2, whitePegs: 0 },
      { previousMove: [2, 3, 3, 2], redPegs: 1, whitePegs: 1 },
      { previousMove: [1, 7, 4, 2], redPegs: 1, whitePegs: 0 },
      { previousMove: [1, 3, 4, 7], redPegs: 1, whitePegs: 0 },
    ];
    let mockMove = { previousMove: [2, 3, 7, 5], redPegs: 1, whitePegs: 1 };
    let action = { type: ADD_USER_MOVE, move: mockMove };
    let reducer = moveHistoryReducer(initialState, action);
    let i = 0;
    for (; i < initialState.length; i++) {
      expect(reducer[i]).toEqual(initialState[i]);
    }
    expect(reducer[i]).toEqual({
      previousMove: [2, 3, 7, 5],
      redPegs: 1,
      whitePegs: 1,
    });
    expect(reducer).not.toEqual(initialState);
  });
  it("should change state to empty array", () => {
    let initialState = [
      { previousMove: [1, 7, 4, 2], redPegs: 2, whitePegs: 0 },
      { previousMove: [2, 3, 3, 2], redPegs: 1, whitePegs: 1 },
      { previousMove: [1, 7, 4, 2], redPegs: 1, whitePegs: 0 },
      { previousMove: [1, 3, 4, 7], redPegs: 1, whitePegs: 0 },
    ];
    let action = { type: TWO_PLAYER_CHANGE_TURN };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
  it("should change to empty array", () => {
    let initialState = [
      { previousMove: [1, 7, 4, 2], redPegs: 2, whitePegs: 0 },
      { previousMove: [2, 3, 3, 2], redPegs: 1, whitePegs: 1 },
      { previousMove: [1, 7, 4, 2], redPegs: 1, whitePegs: 0 },
      { previousMove: [1, 3, 4, 7], redPegs: 1, whitePegs: 0 },
    ];
    let action = { type: VERSUS_COMPUTER };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
  it("should state to empty array", () => {
    let initialState = [
      { previousMove: [1, 7, 4, 2], redPegs: 2, whitePegs: 0 },
      { previousMove: [2, 3, 3, 2], redPegs: 1, whitePegs: 1 },
      { previousMove: [1, 7, 4, 2], redPegs: 1, whitePegs: 0 },
      { previousMove: [1, 3, 4, 7], redPegs: 1, whitePegs: 0 },
    ];
    let action = { type: CHANGE_MODE };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
});
