import { SET_SECRET_CODE } from "../actions/actionTypes";

export function correctCodeReducer(state = null, action){
  switch(action.type){
    case SET_SECRET_CODE:
      return action.code_info
    default:
      return state
    }
}