import { GAME_WON, GAME_LOST } from "../actions/actionTypes";

export function isPlayerWinnerReducer(state = null, action){
  switch(action.type){
    case GAME_WON:
      return true
      case GAME_LOST:
        return false 
        default:
          return state
  }
}