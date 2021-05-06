import { connect } from "react-redux";
import { setUserCreatedCode } from "../actions/actions";
import { SubmitButton } from "../views/buttons/SubmitButton";

function mapStateToProps(state) {
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submit: () => {
      dispatch(setUserCreatedCode());
    },
  };
}

export const CreateOwnCodeSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButton);
