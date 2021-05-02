import React from "react";
import { TIMED_MODE } from "../actions/actionTypes";
import { PropTypes } from "prop-types";

export function ModeDisplayView(props) {
  let { gameType } = props;
  return gameType === TIMED_MODE ? <h1>Timed Mode</h1> : <h1>Classic Mode</h1>;
}

ModeDisplayView.propTypes = {
  gameType: PropTypes.bool,
};
