import { connect } from "react-redux";
import { changeTurn, gameWon, versusComputer } from "../actions/actions";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";
import { CountdownTimer } from "../views/CountdownTimer";

function mapStateToProps(state) {
  return {
    timeAllowed: state.advancedOptions?.timeAllowed,
    isTwoPlayer: state.isTwoPlayer,
    turnChange: state.turnChange,
    advancedOptions: state.advancedOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    finishGame: () => dispatch(gameWon()),
    changePlayers: (
      codeLength,
      codeOptions,
      turnsAllowed,
      timeAllowed,
      turnsMade
    ) => {
      dispatch({ type: SET_SCREEN_CHANGE });
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
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let {
    timeAllowed,
    isTwoPlayer,
    turnChange,
    advancedOptions,
  } = mapStateToProps;
  let { finishGame, changePlayers } = mapDispatchToProps;
  let { codeLength, codeOptions, turnsAllowed, turnsMade } = advancedOptions;
  return {
    timeAllowed,
    isTwoPlayer,
    turnChange,
    endGame: () => finishGame(),
    changeTurn: () =>
      changePlayers(
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
        turnsMade
      ),
  };
}

export const CountdownTimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CountdownTimer);
