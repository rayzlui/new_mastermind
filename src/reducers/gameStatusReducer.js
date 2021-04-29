import {GAME_WON, GAME_LOST, VERSUS_COMPUTER, START_PLAYER} from '../actions/actionTypes'

export function gameStatusReducer(state = false, action){
  switch (action.type){
    case VERSUS_COMPUTER:
      case START_PLAYER:
      return true
      case GAME_WON:
        case GAME_LOST:
        return false 

    default:
      return state
  }
}