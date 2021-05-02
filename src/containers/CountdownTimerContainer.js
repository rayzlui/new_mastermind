import { connect } from "react-redux";
import { gameWon } from "../actions/actions";
import { CountdownTimer } from "../views/CountdownTimer";

function mapStateToProps(state) {
  return {
    timeAllowed: state.advancedOptions.timeAllowed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    endGame: () => dispatch(gameWon()),
  };
}

export const CountdownTimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownTimer);
