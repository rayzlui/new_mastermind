import React, { useState } from "react";
import { AdvancedOptionsContainer } from "../../containers/AdvancedOptionsContainer";
import { PropTypes } from "prop-types";
import { ChangeModeContainer } from "../../containers/ChangeModeContainer";
import { ModeDisplayContainer } from "../../containers/ModeDisplayContainer";

export function GameSelectView(props) {
  let { quickPlay, playAgain, winner } = props;
  let [advancedOptions, toggleAdvanceOptions] = useState(false);

  let selectDifficulty = advancedOptions ? <AdvancedOptionsContainer /> : null;
  let [gamePlay, userChoice] =
    winner === null
      ? [
          // eslint-disable-next-line react/jsx-key
          <button onClick={quickPlay} className={"game_options"}>
            Quick Play
          </button>,
          "Advanced Options",
        ]
      : [
          // eslint-disable-next-line react/jsx-key
          <button onClick={playAgain} className={"game_options"}>
            RUN IT BACK
          </button>,
          "Change Settings",
        ];

  return (
    <section className={"game_select_container"}>
      <ModeDisplayContainer />
      {gamePlay}
      <button onClick={() => toggleAdvanceOptions(!advancedOptions)}>
        {userChoice}
      </button>
      {selectDifficulty}
      <ChangeModeContainer />
    </section>
  );
}

GameSelectView.propTypes = {
  quickPlay: PropTypes.func,
  playAgain: PropTypes.func,
  winner: PropTypes.bool,
  gameType: PropTypes.string,
};
