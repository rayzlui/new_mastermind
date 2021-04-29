import {combineReducers} from 'redux'
import {userBoardReducer} from './userBoardReducer'
import {userSelectedReducer} from './userSelectedIndex'
import {moveHistoryReducer} from './moveHistoryReducer'
import {correctCodeReducer} from './correctCodeReducer'
import {advancedOptionsReducer} from './advancedOptionsReducer'
import {gameStatusReducer} from './gameStatusReducer'
import { isPlayerWinnerReducer } from './isPlayerWinnerReducer'
import { remainingTurnsReducer } from './remainderTurnsReducer'


export const rootReducer = combineReducers({
  userBoard: userBoardReducer,
  userSelected: userSelectedReducer, 
  moveHistory: moveHistoryReducer,
  correctCode: correctCodeReducer,
  advancedOptions: advancedOptionsReducer,
  gameStatus: gameStatusReducer,
  winner: isPlayerWinnerReducer,
  turnsRemaining: remainingTurnsReducer,
})