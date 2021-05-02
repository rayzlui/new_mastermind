import { connect } from "react-redux";
import { Mastermind } from "../views/Mastermind";

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    winner: state.winner,
    versusComputer: state.advancedOptions.computer,
    gameType: state.gameType,
  };
}

export const MastermindContainer = connect(mapStateToProps)(Mastermind);
