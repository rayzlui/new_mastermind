import {
  CHANGE_MODE,
  SET_SECRET_CODE,
  START_PLAYER,
  VERSUS_COMPUTER,
} from "../../actions/actionTypes";
import { correctCodeReducer } from "../correctCodeReducer";

describe("correctCodeReducer", () => {
  it("should not change intial", () => {
    let initialState = null;
    let action = { type: CHANGE_MODE };
    let reducer = correctCodeReducer(initialState, action);
    expect(reducer).toBeNull();
  });
  it("should change initial", () => {
    let intialState = {
      code_info: { code: [3, 4, 3, 2], countCodeNums: { 2: 1, 3: 2, 4: 1 } },
    };
    let action = { type: VERSUS_COMPUTER };
    let reducer = correctCodeReducer(intialState, action);
    expect(reducer).toBeNull();
  });
  it("should change intiial", () => {
    let initialState = null;
    let codeInfo = { code: [4, 3, 2, 3], countCodeNums: { 2: 1, 3: 2, 4: 1 } };
    let action = { type: SET_SECRET_CODE, code_info: codeInfo };
    let reducer = correctCodeReducer(initialState, action);
    expect(reducer).toEqual(codeInfo);
  });
  it("should change intiial", () => {
    let initialState = {
      code: [8, 3, 4, 2],
      countCodeNums: { 2: 1, 3: 1, 4: 1, 8: 1 },
    };
    let codeInfo = {
      code: [7, 2, 1, 3],
      countCodeNums: { 1: 1, 2: 1, 3: 1, 7: 1 },
    };
    let action = { type: SET_SECRET_CODE, code_info: codeInfo };
    let reducer = correctCodeReducer(initialState, action);
    expect(reducer).toEqual(codeInfo);
  });
  it("should change intiial", () => {
    let initialState = null;
    let codeInfo = { code: [4, 3, 2, 3], countCodeNums: { 2: 1, 3: 2, 4: 1 } };
    let action = { type: START_PLAYER, code_info: codeInfo };
    let reducer = correctCodeReducer(initialState, action);
    expect(reducer).toEqual(codeInfo);
  });
  it("should change intiial", () => {
    let initialState = {
      code: [8, 3, 4, 2],
      countCodeNums: { 2: 1, 3: 1, 4: 1, 8: 1 },
    };
    let codeInfo = {
      code: [7, 2, 1, 3],
      countCodeNums: { 1: 1, 2: 1, 3: 1, 7: 1 },
    };
    let action = { type: START_PLAYER, code_info: codeInfo };
    let reducer = correctCodeReducer(initialState, action);
    expect(reducer).toEqual(codeInfo);
  });
});
