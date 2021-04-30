import {UNSELECT_INPUT_SPOT, ERROR_GETTING_CODE, SET_LOADING_SCREEN, SET_SECRET_CODE, CODE_SIZE_SELECTED, USER_INPUT, SELECT_INPUT_SPOT, ADD_USER_MOVE, VERSUS_COMPUTER , VERSUS_PLAYER, GAME_WON, GAME_LOST} from './actionTypes'


export function errorFetchingAPICode(){
  return {type: ERROR_GETTING_CODE}
}


export function setCode(code_info){
  return {type: SET_SECRET_CODE, code_info: code_info}
}

export function loadingScreen(){
  return {type: SET_LOADING_SCREEN}
}

export function codeSizeSelected(size){
  return {type: CODE_SIZE_SELECTED, size: size}
}

export function userInput(selectedCodeIndex, codeInput){
  return {type: USER_INPUT, selectedCodeIndex: selectedCodeIndex, codeInput:codeInput}
}

export function selectInputSpot(index){
  return {type: SELECT_INPUT_SPOT, index: index}
}

export function unselectInputSpot(index){
  return {type: UNSELECT_INPUT_SPOT, index}
}

export function actionUserMoveToHistory(move){
  return {type: ADD_USER_MOVE, move: move}
}

export function versusPlayer(codeLength, codeOptions, turns, timeAllowed){
  return {type: VERSUS_PLAYER, codeLength, codeOptions, turns, timeAllowed}
}

export function versusComputer(codeLength, codeOptions, turns, timeAllowed){
  return {type: VERSUS_COMPUTER,codeLength, codeOptions, turns, timeAllowed}
}

export function gameWon(){
  return {type: GAME_WON}
}

export function gameLost(){
  return {type: GAME_LOST}
}