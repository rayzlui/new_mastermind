import { connect } from "react-redux";
import { changeTurn, gameWon } from "../actions/actions";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";
import { CountdownTimer } from "../views/CountdownTimer";

function mapStateToProps(state) {
  return {
    timeAllowed: state.advancedOptions.timeAllowed,
    isTwoPlayer: state.isTwoPlayer,
    turnChange: state.turnChange,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    endGame: () => dispatch(gameWon()),
    changeTurn: () => {
      dispatch({ type: SET_SCREEN_CHANGE });
      dispatch(changeTurn());
    },
  };
}

export const CountdownTimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownTimer);
