import { connect } from "react-redux";
import { ModeDisplayView } from "../views/ModeDisplay";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
  };
}

export const ModeDisplayContainer = connect(mapStateToProps)(ModeDisplayView);
