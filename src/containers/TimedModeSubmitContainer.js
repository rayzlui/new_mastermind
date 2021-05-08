import { connect } from "react-redux";
import {
  actionUserMoveToHistory,
  versusComputer,
  updateScore,
  twoPlayerAddScore,
} from "../actions/actions";
import { preprocessSubmit } from "../gameLogic/gameLogicFunctions";
import { SubmitButton } from "../views/buttons/SubmitButton";

function handleSinglePlayerTimed(dispatch, { previousMove, state }) {
  let { redPegs, moves } = previousMove;
  let {
    codeLength,
    codeOptions,
    turnsAllowed,
    timeAllowed,
    turnsMade,
  } = state.advancedOptions;
  dispatch(actionUserMoveToHistory(previousMove));
  if (redPegs === moves.length) {
    dispatch(updateScore());
    dispatch(
      versusComputer([
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
        turnsMade,
      ])
    );
    previousMove["correctGuess"] = true;
  }
}

function handleTwoPlayerTimed(dispatch, { previousMove, state }) {
  let { redPegs, moves } = previousMove;
  let { advancedOptions, isTwoPlayer } = state;
  let {
    codeLength,
    codeOptions,
    turnsAllowed,
    timeAllowed,
    turnsMade,
  } = advancedOptions;
  dispatch(actionUserMoveToHistory(previousMove));
  if (redPegs === moves.length) {
    if (isTwoPlayer.playerNumTurn === 2) {
      dispatch(twoPlayerAddScore(2, "add"));
    } else {
      dispatch(twoPlayerAddScore(1, "add"));
    }
    dispatch(
      versusComputer([
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
        turnsMade,
      ])
    );
    previousMove["correctGuess"] = true;
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
    handleSingleTimed: (postCheckInfo) => {
      handleSinglePlayerTimed(dispatch, postCheckInfo);
    },
    handleTwoTimed: (postCheckInfo) => {
      handleTwoPlayerTimed(dispatch, postCheckInfo);
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { handleTwoTimed, handleSingleTimed } = mapDispatchToProps;
  let { isTwoPlayer, numbersGuessed, codeLength } = mapStateToProps;
  return {
    numbersGuessed,
    codeLength,
    submit: () => {
      let postCheckInfo = preprocessSubmit(mapStateToProps);
      if (isTwoPlayer) {
        handleTwoTimed(postCheckInfo);
      } else {
        handleSingleTimed(postCheckInfo);
      }
    },
  };
}

export const TimedModeSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SubmitButton);
