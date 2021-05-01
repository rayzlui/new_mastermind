import { GAME_WON, GAME_LOST, VERSUS_PLAYER, VERSUS_COMPUTER, ONE_MORE_CHANCE } from "../actions/actionTypes";

export function isPlayerWinnerReducer(state = null, action){
  switch(action.type){
    case GAME_WON:
      return true
    case GAME_LOST:
      return false 
    case VERSUS_PLAYER:
    case VERSUS_COMPUTER:
    case ONE_MORE_CHANCE:
      return null
    default:
      return state
}
}