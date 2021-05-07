import { connect } from "react-redux";
import { CodeOptions } from "../views/buttons/CodeOptions";
import { userInput } from "../actions/actions";

function mapStateToProps(state) {
  return {
    userSelected: state.userSelected,
    gameSize: state.advancedOptions.codeOptions,
    pegColors: state.pegColors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputChoiceInto: (index, value) => {
      dispatch(userInput(index, value));
    },
  };
}

export const CodeOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeOptions);
