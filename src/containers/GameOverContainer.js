import { connect } from "react-redux";
import { addExtraTurn } from "../actions/actions";
import { GameOverView } from "../views/GameOverView";

function mapStateToProps(state) {
  return {
    winner: state.winner,
    showCode: state.correctCode.code,
    gameType: state.gameType,
    isTwoPlayer: state.isTwoPlayer,
  };
}

function mapDispatchToState(dispatch) {
  return {
    oneMoreChance: () => dispatch(addExtraTurn()),
  };
}

export const GameOverContainer = connect(
  mapStateToProps,
  mapDispatchToState
)(GameOverView);
