import { connect } from "react-redux";
import {
  gameWon,
  actionUserMoveToHistory,
  versusComputer,
  changeTurn,
  twoPlayerAddScore,
  gameLost,
} from "../actions/actions";
import { SubmitButton } from "../views/buttons/SubmitButton";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";
import { preprocessSubmit } from "../gameLogic/gameLogicFunctions";

function handleSinglePlayerClassic(dispatch, { previousMove, state }) {
  let { turnsMade, turnsAllowed } = state.advancedOptions;
  let { redPegs, moves } = previousMove;
  dispatch(actionUserMoveToHistory(previousMove));
  if (redPegs === moves.length) {
    previousMove["correctGuess"] = true;
    dispatch(gameWon());
  } else {
    if (turnsAllowed - turnsMade === 1) {
      dispatch(gameLost());
    }
  }
}

function handleTwoPlayerClassic(dispatch, { previousMove, state }) {
  let { redPegs, moves } = previousMove;
  let { advancedOptions, isTwoPlayer } = state;
  let {
    codeLength,
    codeOptions,
    turnsAllowed,
    timeAllowed,
    turnsMade,
  } = advancedOptions;
  if (redPegs === moves.length) {
    if (isTwoPlayer.playerNumTurn === 2) {
      //if second player just finished => gameover to display who won
      dispatch(twoPlayerAddScore(2, turnsMade));
      //add last move for accurate score
      dispatch(gameWon());
    } else {
      dispatch(twoPlayerAddScore(1, turnsMade));
      dispatch(changeTurn());
      dispatch(
        versusComputer([
          codeLength,
          codeOptions,
          turnsAllowed,
          timeAllowed,
          turnsMade,
        ])
      );
      dispatch({ type: SET_SCREEN_CHANGE });
    }
  } else {
    dispatch(actionUserMoveToHistory(previousMove));
  }
}

function mapStateToProps(state) {
  let {
    correctCode,
    gameType,
    userBoard,
    advancedOptions,
    isTwoPlayer,
  } = state;
  return {
    numbersGuessed: userBoard?.numbersGuessed,
    codeLength: advancedOptions?.codeLength,
    correctCode,
    gameType,
    userBoard,
    advancedOptions,
    isTwoPlayer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleTwoClassic: (postCheckInfo) => {
      handleTwoPlayerClassic(dispatch, postCheckInfo);
    },
    handleSingleClassic: (postCheckInfo) => {
      handleSinglePlayerClassic(dispatch, postCheckInfo);
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { handleSingleClassic, handleTwoClassic } = mapDispatchToProps;
  let { isTwoPlayer, numbersGuessed, codeLength } = mapStateToProps;
  return {
    numbersGuessed,
    codeLength,
    submit: () => {
      let postCheckInfo = preprocessSubmit(mapStateToProps);
      if (isTwoPlayer) {
        handleTwoClassic(postCheckInfo);
      } else {
        handleSingleClassic(postCheckInfo);
      }
    },
  };
}

export const ClassicModeSubmit = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SubmitButton);
