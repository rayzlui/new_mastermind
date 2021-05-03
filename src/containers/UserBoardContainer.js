import { connect } from "react-redux";
import { selectInputSpot } from "../actions/actions";
import { UserBoard } from "../views/buttons/UserBoard";

function mapStateToProps(state) {
  return {
    userBoard: state.userBoard.board,
    userSelected: state.userSelected,
    hints: state.userBoard.hints,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInputSpot: (index) => dispatch(selectInputSpot(index)),
  };
}

export const UserBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBoard);
