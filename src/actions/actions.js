import {
  ADD_ANOTHER_TURN,
  NEW_GAME,
  CORRECT_GUESS,
  SET_SECRET_CODE,
  CODE_SIZE_SELECTED,
  USER_INPUT,
  SELECT_INPUT_SPOT,
  ADD_USER_MOVE,
  VERSUS_COMPUTER,
  VERSUS_PLAYER,
  GAME_WON,
  GAME_LOST,
  HINT_GIVEN,
  ONE_PLAYER,
  TWO_PLAYER,
  TWO_PLAYER_CHANGE_TURN,
  TWO_PLAYER_UPDATE_SCORE,
  START_PLAYER,
} from "./actionTypes";

import { handleHintGivenLogic } from "../gameLogic/gameLogicFunctions";

export function setUserCreatedCode(userBoard) {
  let codeCreated = userBoard.board.slice();
  let numCount = codeCreated.reduce((acc, num) => {
    acc[num] = acc[num] + 1 || 1;
    return acc;
  }, {});

  return {
    type: START_PLAYER,
    code_info: { code: codeCreated, countOfEachNum: numCount },
    codeLength: codeCreated.length,
  };
}

export function setCode(code_info) {
  return { type: SET_SECRET_CODE, code_info: code_info };
}

export function codeSizeSelected(size) {
  return { type: CODE_SIZE_SELECTED, size: size };
}

export function userInput(selectedCodeIndex, codeInput) {
  return {
    type: USER_INPUT,
    selectedCodeIndex: selectedCodeIndex,
    codeInput: codeInput,
  };
}

export function selectInputSpot(index) {
  return { type: SELECT_INPUT_SPOT, index: index };
}

export function actionUserMoveToHistory(move) {
  return { type: ADD_USER_MOVE, move: move };
}

export function versusPlayer(options) {
  let intergize = options.map((x) => parseInt(x));
  let [codeLength, codeOptions, turnsAllowed, timeAllowed] = intergize;
  return {
    type: VERSUS_PLAYER,
    codeLength,
    codeOptions,
    turnsAllowed,
    timeAllowed,
  };
}

export function versusComputer(options) {
  let intergize = options.map((x) => parseInt(x));
  let [codeLength, codeOptions, turnsAllowed, timeAllowed] = intergize;
  return {
    type: VERSUS_COMPUTER,
    codeLength,
    codeOptions,
    turnsAllowed,
    timeAllowed,
  };
}

export function gameWon() {
  return { type: GAME_WON };
}

export function gameLost() {
  return { type: GAME_LOST };
}

export function addExtraTurn(turns = 1) {
  return { type: ADD_ANOTHER_TURN, turns };
}

export function updateScore() {
  return { type: CORRECT_GUESS };
}

export function newGame() {
  return { type: NEW_GAME };
}

export function hintRequested(hints, code) {
  let [index, value] = handleHintGivenLogic(code, hints);
  return { type: HINT_GIVEN, hint: { index: index, value: value } };
}

export function setOnePlayer() {
  return { type: ONE_PLAYER };
}

export function setTwoPlayer() {
  return { type: TWO_PLAYER };
}

export function changeTurn() {
  return { type: TWO_PLAYER_CHANGE_TURN };
}

export function twoPlayerAddScore(playerNum, playerScore) {
  return {
    type: TWO_PLAYER_UPDATE_SCORE,
    playerNum: `player${playerNum}`,
    playerScore: playerScore,
  };
}
