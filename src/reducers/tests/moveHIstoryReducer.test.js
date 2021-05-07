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
  it("should change initial", () => {
    let initialState = [];
    let action = { type: ADD_USER_MOVE, move: 8 };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer[0]).toEqual(8);
    expect(reducer).not.toEqual(initialState);
  });
  it("should change initial", () => {
    let initialState = [3, 4, 2, 8, 12, 2, 2];
    let action = { type: ADD_USER_MOVE, move: 9 };
    let reducer = moveHistoryReducer(initialState, action);
    let i = 0;
    for (; i < initialState.length; i++) {
      expect(reducer[i]).toEqual(initialState[i]);
    }
    expect(reducer[i]).toEqual(9);
    expect(reducer).not.toEqual(initialState);
  });
  it("should change initial", () => {
    let initialState = [3, 4, 2, 8, 12, 2, 2];
    let action = { type: TWO_PLAYER_CHANGE_TURN };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
  it("should change initial", () => {
    let initialState = [3, 4, 2, 8, 12, 2, 2];
    let action = { type: VERSUS_COMPUTER };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
  it("should change initial", () => {
    let initialState = [3, 4, 2, 8, 12, 2, 2];
    let action = { type: CHANGE_MODE };
    let reducer = moveHistoryReducer(initialState, action);
    expect(reducer.length).toEqual(0);
  });
});
