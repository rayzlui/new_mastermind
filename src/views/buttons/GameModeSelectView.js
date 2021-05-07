import React from "react";
import { PropTypes } from "prop-types";

export function GameModeSelectView(props) {
  let { selectClassic, selectTimed } = props;
  return (
    <section className={"intro_screen"}>
      <button onClick={() => selectClassic()} className={"game_options"}>
        Classic Mode
      </button>
      <button onClick={() => selectTimed()} className={"game_options"}>
        Timed Mode
      </button>
    </section>
  );
}

GameModeSelectView.propTypes = {
  selectClassic: PropTypes.func,
  selectTimed: PropTypes.func,
};
