import {
  CLASSIC_MODE,
  START_PLAYER,
  TIMED_MODE,
} from "../../actions/actionTypes";
import { gameTypeReducer } from "../gameTypeReducer";

describe("gameTypeReducer", () => {
  it("should not change intiial", () => {
    let intialState = null;
    let action = { type: START_PLAYER };
    let reducer = gameTypeReducer(intialState, action);
    expect(reducer).toEqual(intialState);
  });
  it("should change intiial", () => {
    let intialState = null;
    let action = { type: TIMED_MODE };
    let reducer = gameTypeReducer(intialState, action);
    expect(reducer).toEqual(TIMED_MODE);
  });
  it("should change intiial", () => {
    let intialState = CLASSIC_MODE;
    let action = { type: TIMED_MODE };
    let reducer = gameTypeReducer(intialState, action);
    expect(reducer).toEqual(TIMED_MODE);
  });
  it("should change intiial", () => {
    let intialState = TIMED_MODE;
    let action = { type: CLASSIC_MODE };
    let reducer = gameTypeReducer(intialState, action);
    expect(reducer).toEqual(CLASSIC_MODE);
  });
  it("should change intiial", () => {
    let intialState = null;
    let action = { type: CLASSIC_MODE };
    let reducer = gameTypeReducer(intialState, action);
    expect(reducer).toEqual(CLASSIC_MODE);
  });
});
