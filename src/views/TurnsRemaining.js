import React from "react";
import { PropTypes } from "prop-types";

export function TurnsRemaining(props) {
  let { turnsAllowed, turnsMade, isTwoPlayer } = props;
  if (isTwoPlayer) {
    return <p> Moves Made: {turnsMade}</p>;
  }
  return <p>Turns Remaining: {turnsAllowed - turnsMade}</p>;
}

TurnsRemaining.propTypes = {
  turnsAllowed: PropTypes.number,
  turnsMade: PropTypes.number,
  isTwoPlayer: PropTypes.object,
};
