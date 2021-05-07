import React from "react";
import { PropTypes } from "prop-types";

export function ScoreView(props) {
  let { score, isTwoPlayer } = props;
  let showScore = score;
  if (isTwoPlayer) {
    showScore =
      isTwoPlayer.playerNumTurn === 1
        ? isTwoPlayer.player1
        : isTwoPlayer.player2;
  }
  return (
    <p>
      Score:{" "}
      <span key={showScore} className={"score_view"}>
        {showScore}
      </span>
    </p>
  );
}

ScoreView.propTypes = {
  score: PropTypes.number,
  isTwoPlayer: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
