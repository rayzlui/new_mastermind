import { combineReducers } from "redux";
import { userBoardReducer } from "./userBoardReducer";
import { selectedIndexReducer } from "./selectedIndexReducer";
import { moveHistoryReducer } from "./moveHistoryReducer";
import { correctCodeReducer } from "./correctCodeReducer";
import { advancedOptionsReducer } from "./advancedOptionsReducer";
import { gameStatusReducer } from "./gameStatusReducer";
import { isPlayerWinnerReducer } from "./isPlayerWinnerReducer";
import { scoreReducer } from "./scoreReducer";
import { gameTypeReducer } from "./gameTypeReducer";
import { versusModeReducer } from "./versusModeReducer";
import { turnChangeReducer } from "./turnChangeReducer";
import { pegColorsReducers } from "./pegColorsReducer";

export const rootReducer = combineReducers({
  userBoard: userBoardReducer,
  userSelected: selectedIndexReducer,
  moveHistory: moveHistoryReducer,
  correctCode: correctCodeReducer,
  advancedOptions: advancedOptionsReducer,
  gameStatus: gameStatusReducer,
  winner: isPlayerWinnerReducer,
  score: scoreReducer,
  gameType: gameTypeReducer,
  isTwoPlayer: versusModeReducer,
  turnChange: turnChangeReducer,
  pegColors: pegColorsReducers,
});
