import React from "react";
import { TIMED_MODE } from "../actions/actionTypes";
import { PropTypes } from "prop-types";

export function ModeDisplayView(props) {
  let { gameType } = props;
  return gameType === TIMED_MODE ? <h3>Timed Mode</h3> : <h3>Classic Mode</h3>;
}

ModeDisplayView.propTypes = {
  gameType: PropTypes.string,
};
