import React from "react";
import { PropTypes } from "prop-types";

export function ScoreView(props) {
  let { score } = props;
  return <p>Score: {score}</p>;
}

ScoreView.propTypes = { score: PropTypes.number };
