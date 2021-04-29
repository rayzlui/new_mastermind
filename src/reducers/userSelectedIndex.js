import {ADD_USER_MOVE, SELECT_INPUT_SPOT, USER_INPUT} from '../actions/actionTypes'

export function userSelectedReducer(state = null, action){
  switch(action.type){
    case SELECT_INPUT_SPOT:
      return action.index
    case ADD_USER_MOVE: 
    case USER_INPUT:
      return null
    default:
      return state
  }
}