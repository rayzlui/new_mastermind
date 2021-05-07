import { connect } from "react-redux";
import { START_TURN } from "../actions/actionTypes";
import { ChangeTurnScreen } from "../views/ChangeTurnScreen";

function mapStateToProps(state) {
  return {
    isTwoPlayer: state.isTwoPlayer,
    turnChange: state.turnChange,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTurn: () => dispatch({ type: START_TURN }),
  };
}

export const ChangeTurnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTurnScreen);
