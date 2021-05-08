import {
  ADD_ANOTHER_TURN,
  CHANGE_MODE,
  GAME_LOST,
  GAME_WON,
  TIMED_MODE,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { isPlayerWinnerReducer } from "../isPlayerWinnerReducer";

describe("isPlayerWinner", () => {
  it("should not change initial", () => {
    let initialState = null;
    let action = { type: TIMED_MODE };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should change state to true", () => {
    let initialState = null;
    let action = { type: GAME_WON };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toEqual(true);
  });
  it("should change state to false", () => {
    let initialState = null;
    let action = { type: GAME_LOST };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
  it("should change state to null", () => {
    let initialState = false;
    let action = { type: VERSUS_PLAYER };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = true;
    let action = { type: VERSUS_COMPUTER };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = false;
    let action = { type: ADD_ANOTHER_TURN };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change state to null", () => {
    let initialState = false;
    let action = { type: CHANGE_MODE };
    let reducer = isPlayerWinnerReducer(initialState, action);
    expect(reducer).toBeNull();
  });
});
