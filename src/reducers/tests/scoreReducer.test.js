import {
  CORRECT_GUESS,
  NEW_GAME,
  START_PLAYER,
} from "../../actions/actionTypes";
import { scoreReducer } from "../scoreReducer";

describe("scoreReducer", () => {
  it("should not change intial", () => {
    let initialState = 2;
    let action = { type: START_PLAYER };
    let reducer = scoreReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should change intial", () => {
    let initialState = 2;
    let action = { type: CORRECT_GUESS };
    let reducer = scoreReducer(initialState, action);
    expect(reducer).toEqual(3);
  });
  it("should change intial", () => {
    let initialState = 2;
    let action = { type: NEW_GAME };
    let reducer = scoreReducer(initialState, action);
    expect(reducer).toEqual(0);
  });
});
