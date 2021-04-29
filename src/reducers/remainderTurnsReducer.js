import { ADD_USER_MOVE, USER_SET_DIFFICULTY } from "../actions/actionTypes"

export function remainingTurnsReducer(state = 3, action){
  switch(action.type){
    case USER_SET_DIFFICULTY:
      return action.tries
    case ADD_USER_MOVE:
      return state - 1
    default:
      return state
  }
}