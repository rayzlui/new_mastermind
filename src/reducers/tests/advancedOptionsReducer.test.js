import {
  ADD_ANOTHER_TURN,
  ADD_USER_MOVE,
  CHANGE_MODE,
  TIMED_MODE,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "../../actions/actionTypes";
import { advancedOptionsReducer } from "../advancedOptionsReducer";

describe("advancedOptionsReducer", () => {
  it("should not change initial", () => {
    const intialState = {
      computer: null,
      codeLength: null,
      codeOptions: null,
      turnsAllowed: null,
      turnsMade: 0,
      timeAllowed: null,
    };
    let action = { type: "Does not apply" };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBeNull();
    expect(codeLength).toBeNull();
    expect(codeOptions).toBeNull();
    expect(turnsAllowed).toBeNull();
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toBeNull();
  });
  it("should not change initial", () => {
    const intialState = {
      computer: true,
      codeLength: 4,
      codeOptions: 8,
      turnsAllowed: 6,
      turnsMade: 2,
      timeAllowed: null,
    };
    let action = { type: CHANGE_MODE };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toEqual(true);
    expect(codeLength).toEqual(4);
    expect(codeOptions).toEqual(8);
    expect(turnsAllowed).toEqual(6);
    expect(turnsMade).toEqual(2);
    expect(timeAllowed).toBeNull();
  });
  it("should change state to computer = false, codeLength = 4, codeOptions = 8, turnsAllowed = 10, turnsMade = 0", () => {
    const intialState = {
      computer: null,
      codeLength: null,
      codeOptions: null,
      turnsAllowed: null,
      turnsMade: 0,
      timeAllowed: null,
    };
    let action = {
      type: VERSUS_PLAYER,
      codeLength: 4,
      codeOptions: 8,
      turnsAllowed: 10,
      turnsMade: 0,
      timeAllowed: null,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(false);
    expect(codeLength).toEqual(4);
    expect(codeOptions).toEqual(8);
    expect(turnsAllowed).toEqual(10);
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toBeNull();
  });
  it("should change state to computer = false, codeLength = 14, codeOptions = 48, turnsAllowed = 50, turnsMade = 0, timeAllowed = null", () => {
    const intialState = {
      computer: false,
      codeLength: 4,
      codeOptions: 12,
      turnsAllowed: 2,
      turnsMade: 0,
      timeAllowed: 10,
    };
    let action = {
      type: VERSUS_PLAYER,
      codeLength: 14,
      codeOptions: 48,
      turnsAllowed: 50,
      turnsMade: 0,
      timeAllowed: null,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(false);
    expect(codeLength).toEqual(14);
    expect(codeOptions).toEqual(48);
    expect(turnsAllowed).toEqual(50);
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toBeNull();
  });
  it("should change state to computer = true, codeLength = 4, codeOptions = 8, turnsAllowed = 10, turnsMade = 0, timeAllowed = 5", () => {
    const intialState = {
      computer: false,
      codeLength: 3,
      codeOptions: 2,
      turnsAllowed: 6,
      turnsMade: 2,
      timeAllowed: 1,
    };
    let action = {
      type: VERSUS_COMPUTER,
      codeLength: 4,
      codeOptions: 8,
      turnsAllowed: 10,
      turnsMade: 0,
      timeAllowed: 5,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(true);
    expect(codeLength).toEqual(4);
    expect(codeOptions).toEqual(8);
    expect(turnsAllowed).toEqual(10);
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toEqual(5);
  });

  it("should change state to computer = true, codeLength = 7, codeOptions = 10, turnsAllowed = 8, turnsMade = 0, timeAllowed = 4", () => {
    const intialState = {
      computer: false,
      codeLength: 7,
      codeOptions: 10,
      turnsAllowed: 8,
      turnsMade: 0,
      timeAllowed: 4,
    };
    let action = {
      type: TIMED_MODE,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(true);
    expect(codeLength).toEqual(7);
    expect(codeOptions).toEqual(10);
    expect(turnsAllowed).toEqual(8);
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toEqual(4);
  });
  it("should change state to computer = true, codeLength = 3, codeOptions = 6, turnsAllowed = 11, turnsMade = 0, timeAllowed = 2", () => {
    const intialState = {
      computer: null,
      codeLength: 3,
      codeOptions: 6,
      turnsAllowed: 11,
      turnsMade: 0,
      timeAllowed: 2,
    };
    let action = {
      type: TIMED_MODE,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(true);
    expect(codeLength).toEqual(3);
    expect(codeOptions).toEqual(6);
    expect(turnsAllowed).toEqual(11);
    expect(turnsMade).toEqual(0);
    expect(timeAllowed).toEqual(2);
  });
  it("should change state to computer = false, codeLength = 5, codeOptions = 11, turnsAllowed = 4, turnsMade = 1, timeAllowed = null", () => {
    const intialState = {
      computer: false,
      codeLength: 5,
      codeOptions: 11,
      turnsAllowed: 4,
      turnsMade: 0,
      timeAllowed: null,
    };
    let action = {
      type: ADD_USER_MOVE,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(false);
    expect(codeLength).toEqual(5);
    expect(codeOptions).toEqual(11);
    expect(turnsAllowed).toEqual(4);
    expect(turnsMade).toEqual(1);
    expect(timeAllowed).toBeNull();
  });
  it("should change state to computer = true, codeLength = 4, codeOptions = 11, turnsAllowed = 6, turnsMade = 1, timeAllowed = 3", () => {
    const intialState = {
      computer: true,
      codeLength: 4,
      codeOptions: 11,
      turnsAllowed: 5,
      turnsMade: 1,
      timeAllowed: 3,
    };
    let action = {
      type: ADD_ANOTHER_TURN,
      turns: 1,
    };
    let advancedReducer = advancedOptionsReducer(intialState, action);
    let {
      computer,
      codeLength,
      codeOptions,
      turnsAllowed,
      turnsMade,
      timeAllowed,
    } = advancedReducer;
    expect(computer).toBe(true);
    expect(codeLength).toEqual(4);
    expect(codeOptions).toEqual(11);
    expect(turnsAllowed).toEqual(6);
    expect(turnsMade).toEqual(1);
    expect(timeAllowed).toEqual(3);
  });
});
