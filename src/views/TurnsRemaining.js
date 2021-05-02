import React from "react";
import { PropTypes } from "prop-types";

export function TurnsRemaining(props) {
  let { turnsAllowed, turnsMade } = props;
  return <p>Turns Remaining: {turnsAllowed - turnsMade}</p>;
}

TurnsRemaining.propTypes = {
  turnsAllowed: PropTypes.number,
  turnsMade: PropTypes.number,
};
