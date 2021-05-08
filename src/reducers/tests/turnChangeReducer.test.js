import {
  SET_SCREEN_CHANGE,
  START_TURN,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { turnChangeReducer } from "../turnChangeReducer";

describe("turnChangeReducer", () => {
  it("should not change initial", () => {
    let initialState = false;
    let action = { type: VERSUS_PLAYER };
    let reducer = turnChangeReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should change state to false", () => {
    let initialState = true;
    let action = { type: START_TURN };
    let reducer = turnChangeReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
  it("should change state to false", () => {
    let initialState = false;
    let action = { type: SET_SCREEN_CHANGE };
    let reducer = turnChangeReducer(initialState, action);
    expect(reducer).toEqual(true);
  });
});
