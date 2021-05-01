import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes"


export function gameTypeReducer(state = null, action){
  switch(action.type){
    case TIMED_MODE:
      return TIMED_MODE
    case CLASSIC_MODE:
      return CLASSIC_MODE
    default:
      return state
  }
}