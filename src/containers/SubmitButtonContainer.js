import { connect } from "react-redux";
import {
  gameWon,
  actionUserMoveToHistory,
  gameLost,
  versusComputer,
  updateScore,
  changeTurn,
  twoPlayerAddScore,
} from "../actions/actions";
import { checkUserGuess } from "../gameLogic/gameLogicFunctions";
import store from "../createStore";
import { SubmitButton } from "../views/buttons/SubmitButton";
import {
  CLASSIC_MODE,
  SET_SCREEN_CHANGE,
  TIMED_MODE,
} from "../actions/actionTypes";

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
      let {
        correctCode,
        gameType,
        userBoard,
        advancedOptions,
        isTwoPlayer,
      } = state;
      let userBoardValues = userBoard.board.slice();
      let { code, countOfEachNum } = correctCode;
      let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum);
      let { red, white } = checkAnswer;
      let previousMove = {
        moves: userBoardValues,
        redPegs: red,
        whitePegs: white,
      };
      let {
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
        turnsMade,
      } = advancedOptions;
      let usePhrase = Math.floor(Math.random() * 3);
      previousMove["randomPhrase"] = usePhrase;

      if (isTwoPlayer === false) {
        if (gameType === CLASSIC_MODE) {
          if (checkAnswer.red === userBoardValues.length) {
            previousMove["correctGuess"] = true;
            dispatch(gameWon());
          } else {
            if (turnsAllowed - turnsMade === 1) {
              dispatch(gameLost());
            }
          }
        } else if (state.gameType === TIMED_MODE) {
          if (checkAnswer.red === userBoardValues.length) {
            dispatch(updateScore());
            dispatch(versusComputer(codeLength, codeOptions));
            previousMove["correctGuess"] = true;
          }
        }

        dispatch(actionUserMoveToHistory(previousMove));
      } else {
        if (gameType === CLASSIC_MODE) {
          if (checkAnswer.red === userBoardValues.length) {
            if (isTwoPlayer.playerNumTurn === 2) {
              //if second player just finished => gameover to display who won
              dispatch(twoPlayerAddScore(2, turnsMade));
              //add last move for accurate score
              dispatch(gameWon());
            } else {
              dispatch(twoPlayerAddScore(1, turnsMade));
              dispatch(changeTurn());
              dispatch(versusComputer(codeLength, codeOptions, turnsAllowed));
              dispatch({ type: SET_SCREEN_CHANGE });
            }
          } else {
            dispatch(actionUserMoveToHistory(previousMove));
          }
        } else {
          if (checkAnswer.red === userBoardValues.length) {
            if (isTwoPlayer.playerNumTurn === 2) {
              dispatch(twoPlayerAddScore(2, "add"));
            } else {
              dispatch(twoPlayerAddScore(1, "add"));
            }
            dispatch(
              versusComputer(codeLength, codeOptions, null, timeAllowed)
            );
            previousMove["correctGuess"] = true;
          }
          dispatch(actionUserMoveToHistory(previousMove));
        }
      }
    },
  };
}

export const SubmitButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButton);
