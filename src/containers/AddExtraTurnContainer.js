import { connect } from "react-redux";
import { addExtraTurn } from "../actions/actions";
import { AddExtraTurnButton } from "../views/buttons/AddExtraTurnButton";

function mapStateToProps(state) {
  return {
    isTwoPlayer: state.isTwoPlayer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExtraTurn: () => dispatch(addExtraTurn),
  };
}

export const AddExtraTurnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExtraTurnButton);
