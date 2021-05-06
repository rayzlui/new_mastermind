import { connect } from "react-redux";
import { MoveHistory } from "../views/MoveHistory";

function mapStateToProps(state) {
  return {
    previousMoves: state.moveHistory,
    pegColors: state.pegColors,
  };
}

export const MoveHistoryContainer = connect(mapStateToProps)(MoveHistory);
