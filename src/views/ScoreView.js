import React from "react";
import { PropTypes } from "prop-types";

export function ScoreView(props) {
  let { score, isTwoPlayer } = props;
  let showScore = score;
  if (isTwoPlayer) {
    showScore =
      isTwoPlayer.playerNumTurn === 1 ? isTwoPlayer[1] : isTwoPlayer[2];
  }
  return <p>Score: {showScore}</p>;
}

ScoreView.propTypes = {
  score: PropTypes.number,
  isTwoPlayer: PropTypes.object,
};
