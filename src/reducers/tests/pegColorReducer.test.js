import {
  TIMED_MODE,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { pegColorsReducers } from "../pegColorsReducer";

describe("pegColorReducer", () => {
  it("should not change initial", () => {
    let initialState = null;
    let action = { type: TIMED_MODE };
    let reducer = pegColorsReducers(initialState, action);
    expect(reducer).toEqual(initialState);
  });
  it("should create 7 strings, with no duplicates", () => {
    let initialState = null;
    let action = { type: VERSUS_COMPUTER, codeOptions: 7 };
    let reducer = pegColorsReducers(initialState, action);
    expect(reducer).not.toEqual(initialState);
    expect(Object.keys(reducer).length).toEqual(action.codeOptions);
    let count = {};
    //they should all be unique rgb strings
    for (let peg in reducer) {
      let currentPeg = reducer[peg];
      expect(currentPeg.substring(0, 3)).toEqual("rgb");
      expect(count[currentPeg]).toBeFalsy();
      count[currentPeg] = count[currentPeg] + 1 || 1;
    }
  });
  it("should create 4 new strings with no duplicates", () => {
    let initialState = ["rgb(222,223,222", "rgb(22,6,34)"];
    let action = { type: VERSUS_COMPUTER, codeOptions: 4 };
    let reducer = pegColorsReducers(initialState, action);
    expect(reducer).not.toEqual(initialState);
    expect(Object.keys(reducer).length).toEqual(action.codeOptions);
    let count = {};
    //they should all be unique rgb strings
    for (let peg in reducer) {
      let currentPeg = reducer[peg];
      expect(currentPeg.substring(0, 3)).toEqual("rgb");
      expect(count[currentPeg]).toBeFalsy();
      count[currentPeg] = count[currentPeg] + 1 || 1;
    }
  });
  it("should create 7 new strings with no duplicates each containing rbg", () => {
    let initialState = null;
    let action = { type: VERSUS_PLAYER, codeOptions: 7 };
    let reducer = pegColorsReducers(initialState, action);
    expect(reducer).not.toEqual(initialState);
    expect(Object.keys(reducer).length).toEqual(action.codeOptions);
    let count = {};
    //they should all be unique rgb strings
    for (let i = 0; i < reducer.length; i++) {
      let currentPeg = reducer[i];
      expect(currentPeg.substring(0, 3)).toEqual("rgb");
      expect(count[currentPeg]).toBeFalsy();
      count[currentPeg] = count[currentPeg] + 1 || 1;
    }
  });
});
