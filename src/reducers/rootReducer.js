import { combineReducers } from "redux";
import { userBoardReducer } from "./userBoardReducer";
import { userSelectedReducer } from "./userSelectedIndex";
import { moveHistoryReducer } from "./moveHistoryReducer";
import { correctCodeReducer } from "./correctCodeReducer";
import { advancedOptionsReducer } from "./advancedOptionsReducer";
import { gameStatusReducer } from "./gameStatusReducer";
import { isPlayerWinnerReducer } from "./isPlayerWinnerReducer";
import { scoreReducer } from "./scoreReducer";
import { gameTypeReducer } from "./gameTypeReducer";

export const rootReducer = combineReducers({
  userBoard: userBoardReducer,
  userSelected: userSelectedReducer,
  moveHistory: moveHistoryReducer,
  correctCode: correctCodeReducer,
  advancedOptions: advancedOptionsReducer,
  gameStatus: gameStatusReducer,
  winner: isPlayerWinnerReducer,
  score: scoreReducer,
  gameType: gameTypeReducer,
});
