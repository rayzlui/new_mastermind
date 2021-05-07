import { connect } from "react-redux";
import { setUserCreatedCode } from "../actions/actions";
import { SubmitButton } from "../views/buttons/SubmitButton";

function mapStateToProps(state) {
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
    userBoard: state.userBoard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlayerCode: (board) => {
      console.log(board);
      dispatch(setUserCreatedCode(board));
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { userBoard, numbersGuessed, codeLength } = mapStateToProps;
  let { setPlayerCode } = mapDispatchToProps;
  return {
    numbersGuessed,
    codeLength,
    submit: () => {
      setPlayerCode(userBoard);
    },
  };
}

export const CreateOwnCodeSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SubmitButton);
