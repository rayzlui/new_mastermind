import { connect } from "react-redux";
import { ScoreView } from "../views/ScoreView";

function mapStateToProps(state) {
  return {
    score: state.score,
  };
}

export const ScoreContainer = connect(mapStateToProps)(ScoreView);
