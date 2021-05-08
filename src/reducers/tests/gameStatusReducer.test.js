import {
  ADD_ANOTHER_TURN,
  CHANGE_MODE,
  GAME_LOST,
  GAME_WON,
  START_PLAYER,
  VERSUS_COMPUTER,
} from "../../actions/actionTypes";
import { gameStatusReducer } from "../gameStatusReducer";

describe("gameStatusReducer", () => {
  it("should not change initial", () => {
    let initialState = false;
    let action = { type: CHANGE_MODE };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
  it("should change state to true", () => {
    let initialState = false;
    let action = { type: VERSUS_COMPUTER };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(true);
  });
  it("should change state to true", () => {
    let initialState = false;
    let action = { type: START_PLAYER };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(true);
  });
  it("should change state to true", () => {
    let initialState = false;
    let action = { type: ADD_ANOTHER_TURN };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(true);
  });
  it("should change state to false", () => {
    let initialState = true;
    let action = { type: GAME_LOST };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
  it("should change to false", () => {
    let initialState = true;
    let action = { type: GAME_WON };
    let reducer = gameStatusReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
});
