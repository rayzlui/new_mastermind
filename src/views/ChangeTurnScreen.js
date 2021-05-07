import React from "react";
import { PropTypes } from "prop-types";

export function ChangeTurnScreen(props) {
  let { isTwoPlayer, startTurn } = props;
  return (
    <section className={"intro_screen"}>
      <button onClick={startTurn}>
        Start Player {isTwoPlayer.playerNumTurn} Turn
      </button>
    </section>
  );
}

ChangeTurnScreen.propTypes = {
  isTwoPlayer: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  turnChange: PropTypes.bool,
  startTurn: PropTypes.func,
};
