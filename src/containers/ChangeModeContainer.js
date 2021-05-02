import { connect } from "react-redux";
import { CHANGE_MODE } from "../actions/actionTypes";
import { ChangeModeButton } from "../views/buttons/ChangeModeButton";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    switchModes: (mode) => {
      dispatch({ type: CHANGE_MODE });
      dispatch({ type: mode });
    },
  };
}

export const ChangeModeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeModeButton);
