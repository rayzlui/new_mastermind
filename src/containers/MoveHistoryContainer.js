import { connect } from "react-redux";
import { MoveHistory } from "../views/MoveHistory";

function mapStateToProps(state) {
  return {
    previousMoves: state.moveHistory,
  };
}

export const MoveHistoryContainer = connect(mapStateToProps)(MoveHistory);
