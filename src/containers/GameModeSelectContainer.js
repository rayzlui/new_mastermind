import { connect } from "react-redux";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import { GameModeSelectView } from "../views/buttons/GameModeSelectView";

function mapDispatchToProps(dispatch) {
  return {
    selectClassic: () => dispatch({ type: CLASSIC_MODE }),
    selectTimed: () => dispatch({ type: TIMED_MODE }),
  };
}

export const GameModeSelectContainer = connect(
  null,
  mapDispatchToProps
)(GameModeSelectView);
