import {
  ADD_USER_MOVE,
  CHANGE_MODE,
  SELECT_INPUT_SPOT,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { selectedIndexReducer } from "../selectedIndexReducer";

describe("selectedIndexReducer", () => {
  it("should not change initial", () => {
    let initialState = null;
    let action = { type: CHANGE_MODE };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should change state to 4", () => {
    let initialState = null;
    let action = { type: SELECT_INPUT_SPOT, index: 4 };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toEqual(4);
  });
  it("should change state to 7", () => {
    let initialState = 2;
    let action = { type: SELECT_INPUT_SPOT, index: 7 };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toEqual(7);
  });

  it("should change state to null", () => {
    let initialState = 3;
    let action = { type: ADD_USER_MOVE };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = 3;
    let action = { type: USER_INPUT };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = 7;
    let action = { type: VERSUS_COMPUTER };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = 3;
    let action = { type: VERSUS_PLAYER };
    let reducer = selectedIndexReducer(initialState, action);
    expect(reducer).toBeNull();
  });
});
