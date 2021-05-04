import React from "react";
import { PropTypes } from "prop-types";

export function ChangeTurnScreen(props) {
  let { isTwoPlayer, startTurn } = props;
  return (
    <section>
      <button onClick={startTurn}>
        Start {isTwoPlayer.playerNumTurn} Turn
      </button>
    </section>
  );
}

ChangeTurnScreen.propTypes = {
  isTwoPlayer: PropTypes.object,
  turnChange: PropTypes.bool,
  startTurn: PropTypes.func,
};
