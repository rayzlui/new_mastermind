import { connect } from "react-redux";
import { ClassicMode } from "../views/ClassicMode";
import { TimedMode } from "../views/TimedMode";

function mapStateToProps(state) {
  return {
    turnChange: state.turnChange,
  };
}

export const ClassicModeContainer = connect(mapStateToProps)(ClassicMode);
export const TimedModeContainer = connect(mapStateToProps)(TimedMode);
