import { connect } from "react-redux";
import { hintRequested } from "../actions/actions";
import { HintButton } from "../views/buttons/HintButton";

function mapStateToProps(state) {
  return {
    hintCount: state.userBoard.hintCount,
    correctCode: state.correctCode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestHint: () => {
      dispatch(hintRequested());
    },
  };
}

export const HintButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HintButton);
