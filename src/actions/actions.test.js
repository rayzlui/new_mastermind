import {
  actionUserMoveToHistory,
  codeSizeSelected,
  hintRequested,
  selectInputSpot,
  setCode,
  setUserCreatedCode,
  twoPlayerAddScore,
  userInput,
  versusComputer,
  versusPlayer,
} from "./actions";
import {
  ADD_USER_MOVE,
  CODE_SIZE_SELECTED,
  HINT_GIVEN,
  SELECT_INPUT_SPOT,
  SET_SECRET_CODE,
  START_PLAYER,
  TWO_PLAYER_UPDATE_SCORE,
  USER_INPUT,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
} from "./actionTypes";

describe("setUserCreatedCode", () => {
  it("should return new board and hash count", () => {
    let mockBoard = [2, 1, 3, 5, 6, 7, 3, 4, 3, 4];
    let countOfDigitsMockBoard = mockBoard.reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      return acc;
    }, {});
    let mockUserBoard = {};
    mockUserBoard = {};
    mockUserBoard["board"] = mockBoard;
    let userCreatedCode = setUserCreatedCode(mockUserBoard);
    let { type, code_info, codeLength } = userCreatedCode;
    expect(type).toEqual(START_PLAYER);
    expect(codeLength).toEqual(mockBoard.length);
    let { code, countOfEachNum } = code_info;
    for (let i = 0; i < code.length; i++) {
      expect(code[i]).toEqual(mockBoard[i]);
    }
    for (let num in countOfEachNum) {
      expect(countOfEachNum[num]).toEqual(countOfDigitsMockBoard[num]);
    }
  });
});

describe("versusPlayer", () => {
  it("should return objects with number values", () => {
    let options = [2, 5, 7, 4];
    let versusPlayerAction = versusPlayer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusPlayerAction;
    expect(type).toEqual(VERSUS_PLAYER);
    expect(codeLength).toEqual(2);
    expect(codeOptions).toEqual(5);
    expect(turnsAllowed).toEqual(7);
    expect(timeAllowed).toEqual(4);
  });
  it("should return objects with number values", () => {
    let options = ["1", "2", "4", "6"];
    let versusPlayerAction = versusPlayer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusPlayerAction;
    expect(type).toEqual(VERSUS_PLAYER);
    expect(codeLength).toEqual(1);
    expect(codeOptions).toEqual(2);
    expect(turnsAllowed).toEqual(4);
    expect(timeAllowed).toEqual(6);
  });
  it("should return objects with number values", () => {
    let options = ["15", 2, "4", 6];
    let versusPlayerAction = versusPlayer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusPlayerAction;
    expect(type).toEqual(VERSUS_PLAYER);
    expect(codeLength).toEqual(15);
    expect(codeOptions).toEqual(2);
    expect(turnsAllowed).toEqual(4);
    expect(timeAllowed).toEqual(6);
  });
});

describe("versusComputer", () => {
  it("should return objects with number values", () => {
    let options = [2, 5, 7, 4];
    let versusComputerAction = versusComputer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusComputerAction;
    expect(type).toEqual(VERSUS_COMPUTER);
    expect(codeLength).toEqual(2);
    expect(codeOptions).toEqual(5);
    expect(turnsAllowed).toEqual(7);
    expect(timeAllowed).toEqual(4);
  });
  it("should return objects with number values", () => {
    let options = ["1", "2", "4", "6"];
    let versusComputerAction = versusComputer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusComputerAction;
    expect(type).toEqual(VERSUS_COMPUTER);
    expect(codeLength).toEqual(1);
    expect(codeOptions).toEqual(2);
    expect(turnsAllowed).toEqual(4);
    expect(timeAllowed).toEqual(6);
  });
  it("should return objects with number values", () => {
    let options = ["15", 2, "4", 6];
    let versusComputerAction = versusComputer(options);
    let {
      type,
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
    } = versusComputerAction;
    expect(type).toEqual(VERSUS_COMPUTER);
    expect(codeLength).toEqual(15);
    expect(codeOptions).toEqual(2);
    expect(turnsAllowed).toEqual(4);
    expect(timeAllowed).toEqual(6);
  });
});

describe("hintRequested", () => {
  it("should return object with hint", () => {
    let mockHints = { 0: 4, 1: 3, 2: 6 };
    let mockCorrectCode = [4, 3, 6, 9, 15, 4];
    let requestedHint = hintRequested(mockHints, mockCorrectCode);
    let { type, hint } = requestedHint;
    expect(type).toEqual(HINT_GIVEN);
    let { index, value } = hint;
    expect(index).toEqual(3);
    expect(value).toEqual(9);
  });
  it("should return object with hint", () => {
    let mockHints = { 0: 7, 1: 3, 2: 9, 3: 2, 4: 5 };
    let mockCorrectCode = [7, 3, 9, 2, 5, 14, 3, 7, 1];
    let requestedHint = hintRequested(mockHints, mockCorrectCode);
    let { type, hint } = requestedHint;
    expect(type).toEqual(HINT_GIVEN);
    let { index, value } = hint;
    expect(index).toEqual(5);
    expect(value).toEqual(14);
  });
});

describe("setCode", () => {
  it("should return object", () => {
    let mockCodeInfo = {
      code: [2, 4, 3, 6, 3, 4, 5],
      countOfEachNum: { 2: 1, 3: 2, 4: 2, 5: 1, 6: 1 },
    };
    let action = setCode(mockCodeInfo);
    expect(action.code_info).toEqual(mockCodeInfo);
    expect(action.type).toEqual(SET_SECRET_CODE);
  });
});

describe("codeSizeSelected", () => {
  it("should return object", () => {
    let action = codeSizeSelected(7);
    expect(action.size).toEqual(7);
    expect(action.type).toEqual(CODE_SIZE_SELECTED);
  });
});

describe("userInput", () => {
  it("should return object", () => {
    let action = userInput(3, 6);
    expect(action.selectedCodeIndex).toEqual(3);
    expect(action.codeInput).toEqual(6);
    expect(action.type).toEqual(USER_INPUT);
  });
});

describe("selectInputSpot", () => {
  it("should return object", () => {
    let action = selectInputSpot(4);
    expect(action.index).toEqual(4);
    expect(action.type).toEqual(SELECT_INPUT_SPOT);
  });
});

describe("actionUserMoveToHistory", () => {
  it("should return object", () => {
    let mockPreviousMove = [2, 3, 5, 7];
    let move = { redPegs: 4, whitePegs: 0, previousMove: mockPreviousMove };
    let action = actionUserMoveToHistory(move);
    expect(action.move).toEqual(move);
    expect(action.type).toEqual(ADD_USER_MOVE);
  });
});

describe("twoPlayerAddScore", () => {
  it("should return object", () => {
    let action = twoPlayerAddScore(2, 6);
    expect(action.playerNum).toEqual("player2");
    expect(action.playerScore).toEqual(6);
    expect(action.type).toEqual(TWO_PLAYER_UPDATE_SCORE);
  });
});
