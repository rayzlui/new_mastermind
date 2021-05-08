import { connect } from "react-redux";
import { hintRequested } from "../actions/actions";
import { HintButton } from "../views/buttons/HintButton";

function mapStateToProps(state) {
  return {
    hintCount: state.userBoard?.hintCount,
    hints: state.userBoard?.hints,
    correctCode: state.correctCode?.code,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHint: (hints, code) => {
      dispatch(hintRequested(hints, code));
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { hintCount, correctCode, hints } = mapStateToProps;
  let { getHint } = mapDispatchToProps;
  return {
    hintCount,
    correctCode,
    requestHint: () => {
      getHint(hints, correctCode);
    },
  };
}

export const HintButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HintButton);
