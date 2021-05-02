import React from "react";
import { PropTypes } from "prop-types";

export function ScoreView(props) {
  let { score } = props;
  return (
    <section className={"score_view"}>
      <h3>Score</h3>
      <p>{score}</p>
    </section>
  );
}

ScoreView.propTypes = { score: PropTypes.number };
