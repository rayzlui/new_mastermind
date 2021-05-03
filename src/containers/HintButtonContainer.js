import { connect } from "react-redux";
import { hintRequested } from "../actions/actions";
import store from "../createStore";
import { HintButton } from "../views/buttons/HintButton";

function handleHintGivenLogic(correct, currentGuess, previousGivenHints) {
  //previousGiven hints === hash, others === array

  for (let i = 0; i < currentGuess.length; i++) {
    if (previousGivenHints[i] === undefined) {
      return [i, correct[i]];
    }
  }
}

function mapStateToProps(state) {
  return {
    hintCount: state.userBoard.hintCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestHint: () => {
      let state = store.getState();
      let { userBoard, correctCode } = state;
      let { code } = correctCode;
      let { hints, board } = userBoard;
      let newHint = handleHintGivenLogic(code, board, hints);
      dispatch(hintRequested(newHint[0], newHint[1]));
    },
  };
}

export const HintButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HintButton);
