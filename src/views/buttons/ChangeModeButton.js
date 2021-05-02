import React from "react";
import { CLASSIC_MODE, TIMED_MODE } from "../../actions/actionTypes";
import { PropTypes } from "prop-types";

export function ChangeModeButton(props) {
  let { switchModes, gameType } = props;
  let newMode;
  if (gameType === TIMED_MODE) {
    newMode = CLASSIC_MODE;
  } else {
    newMode = TIMED_MODE;
  }
  return (
    <button onClick={() => switchModes(newMode)} className={"game_options"}>
      Change Mode
    </button>
  );
}

ChangeModeButton.propTypes = {
  switchModes: PropTypes.func,
  gameType: PropTypes.string,
};
