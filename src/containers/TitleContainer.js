import { connect } from "react-redux";
import { TitleView } from "../views/TitleView";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
    gameStatus: state.gameStatus,
    numPlayers: state.isTwoPlayer,
  };
}

export const TitleContainer = connect(mapStateToProps)(TitleView);
