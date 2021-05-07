import {
  handleHintGivenLogic,
  preprocessSubmit,
  checkUserGuess,
} from "./gameLogicFunctions";

describe("checkmockUserGuess", () => {
  it("should return 3 red, 0 white", () => {
    let mockCorrectAnswer = [0, 4, 0, 4, 0, 4];
    let mockUserGuess = [4, 4, 4, 4, 4, 4];
    let mockCorrectAnswerReference = { 0: 3, 4: 3 };
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;
    expect(red).toEqual(3);
    expect(white).toEqual(0);
  });
  it("should return 3 red, 1 white", () => {
    let mockCorrectAnswer = [1, 2, 4, 6, 4, 4];
    let mockUserGuess = [6, 4, 4, 4, 4, 4];
    let mockCorrectAnswerReference = { 0: 3, 4: 3 };
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;

    expect(red).toEqual(3);
    expect(white).toEqual(0);
  });
  it("should return 0 red, 0 white", () => {
    let mockCorrectAnswer = [0, 0, 0, 0, 0, 0];
    let mockUserGuess = [4, 4, 4, 4, 4, 4];
    let mockCorrectAnswerReference = { 0: 6 };
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;

    expect(red).toEqual(0);
    expect(white).toEqual(0);
  });

  it("should return 0 red, 6 white", () => {
    let mockCorrectAnswer = [1, 2, 3, 4, 5, 6];
    let mockUserGuess = [2, 3, 4, 5, 6, 1];
    let mockCorrectAnswerReference = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 };
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;

    expect(red).toEqual(0);
    expect(white).toEqual(6);
  });

  it("should return 6 red, 0 white", () => {
    let mockCorrectAnswer = [1, 2, 3, 4, 5, 6];
    let mockUserGuess = [1, 2, 3, 4, 5, 6];
    let mockCorrectAnswerReference = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 };
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;

    expect(red).toEqual(6);
    expect(white).toEqual(0);
  });
  it("should return 1 red, 1 white", () => {
    let mockCorrectAnswer = [1, 2, 3, 4, 5];
    let mockCorrectAnswerReference = mockCorrectAnswer.reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      return acc;
    }, {});
    let mockUserGuess = [3, 4, 6, 3, 5];
    let runCheckFunction = checkUserGuess(
      mockUserGuess,
      mockCorrectAnswer,
      mockCorrectAnswerReference
    );
    let { red, white } = runCheckFunction;

    expect(red).toEqual(1);
    expect(white).toEqual(2);
  });
});

describe("handeHintGivenLogic", () => {
  it("should return zero index", () => {
    let mockCorrect = [2, 3, 4, 5, 6, 7];
    let mockPreviousGivenHints = {};
    let hint = handleHintGivenLogic(mockCorrect, mockPreviousGivenHints);
    expect(hint[0]).toEqual(0);
    expect(hint[1]).toEqual(2);
  });
  it("should return fourth index", () => {
    let mockCorrect = [3, 4, 5, 5, 6, 7, 3, 2];
    let mockPreviousGivenHints = { 0: 3, 1: 4, 2: 5, 3: 5 };
    let hint = handleHintGivenLogic(mockCorrect, mockPreviousGivenHints);
    expect(hint[0]).toEqual(4);
    expect(hint[1]).toEqual(mockCorrect[4]);
  });
});

describe("preprocessSubmit", () => {
  it("should return correct previousMove and state", () => {
    let mockState = {};
    mockState["correctCode"] = {
      code: [1, 2, 3, 4, 5],
      countOfEachNum: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 },
    };
    let mockBoard = [3, 4, 6, 3, 5];
    let mockUserBoard = { board: mockBoard };
    mockState["userBoard"] = mockUserBoard;
    let mockPreSubmit = preprocessSubmit(mockState);
    let { previousMove, state } = mockPreSubmit;
    let { redPegs, whitePegs, moves } = previousMove;
    expect(redPegs).toEqual(1);
    expect(whitePegs).toEqual(2);
    for (let i = 0; i < moves.length; i++) {
      expect(moves[i]).toEqual(mockBoard[i]);
    }
    expect(state).toEqual(mockState);
  });
  it("should return correct previousMove and state", () => {
    let mockState = {};
    let mockCode = [8, 4, 3, 1, 2, 5, 7, 3, 4, 5, 7, 3, 4];
    let mockCountOfEachNum = mockCode.reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      return acc;
    }, {});
    mockState["correctCode"] = {
      code: mockCode,
      countOfEachNum: mockCountOfEachNum,
    };
    let mockBoard = [8, 4, 3, 3, 4, 7, 8, 4, 4, 3, 1, 5, 4];
    let mockUserBoard = { board: mockBoard };
    mockState["userBoard"] = mockUserBoard;
    let mockPreSubmit = preprocessSubmit(mockState);
    let { previousMove, state } = mockPreSubmit;
    let { redPegs, whitePegs, moves } = previousMove;
    expect(redPegs).toEqual(5);
    expect(whitePegs).toEqual(5);
    for (let i = 0; i < moves.length; i++) {
      expect(moves[i]).toEqual(mockBoard[i]);
    }
    expect(state).toEqual(mockState);
  });
});
