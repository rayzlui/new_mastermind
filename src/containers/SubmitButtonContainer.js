import { connect } from "react-redux";
import {
  gameWon,
  actionUserMoveToHistory,
  gameLost,
  versusComputer,
  updateScore,
  changeTurn,
} from "../actions/actions";
import { checkUserGuess } from "../gameLogic/gameLogicFunctions";
import store from "../createStore";
import { SubmitButton } from "../views/buttons/SubmitButton";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import { versusModeReducer } from "../reducers/versusModeReducer";

function mapStateToProps(state) {
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //handle logic to seperate timedMode vs classicMode
    submit: () => {
      let state = store.getState();
      let { correctCode, gameType, isTwoPlayer, advancedOptions } = state;
      let userBoardValues = Object.values(state.userBoard.board);
      let { code, countOfEachNum } = correctCode;
      let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum);
      let { red, white } = checkAnswer;
      let previousMove = {
        moves: userBoardValues,
        redPegs: red,
        whitePegs: white,
      };
      if (gameType === CLASSIC_MODE) {
        if (isTwoPlayer === null) {
          if (checkAnswer.red === userBoardValues.length) {
            dispatch(gameWon());
          } else {
            if (
              advancedOptions.turnsAllowed - advancedOptions.turnsMade ===
              1
            ) {
              dispatch(gameLost());
            }
            dispatch(actionUserMoveToHistory(previousMove));
          }
        } else if (state.gameType === TIMED_MODE) {
          if (checkAnswer.red === userBoardValues.length) {
            dispatch(updateScore());
            let { codeLength, codeOptions } = advancedOptions;
            dispatch(versusComputer(codeLength, codeOptions));
            previousMove["correctGuess"] = true;
          }
          dispatch(actionUserMoveToHistory(previousMove));
        }
      } else {
        //let { playerNumTurn } = isTwoPlayer;
        if (checkAnswer.red === userBoardValues.length) {
          //get new code for player two
          dispatch(versusModeReducer());
          //change turn for player
          dispatch(changeTurn());
        }
      }
    },
  };
}

export const SubmitButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButton);
