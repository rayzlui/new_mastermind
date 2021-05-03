import React, { useState } from "react";
import { AdvancedOptionsContainer } from "../../containers/AdvancedOptionsContainer";
import { PropTypes } from "prop-types";
import { ChangeModeContainer } from "../../containers/ChangeModeContainer";
import { ModeDisplayContainer } from "../../containers/ModeDisplayContainer";

export function GameSelectView(props) {
  let { quickPlay, playAgain, winner } = props;
  let [advancedOptions, toggleAdvanceOptions] = useState(false);

  let selectDifficulty = advancedOptions ? <AdvancedOptionsContainer /> : null;
  let [modeDisplay, gamePlay, userChoice, clickHandler] =
    winner === null
      ? [
          // eslint-disable-next-line react/jsx-key
          <ModeDisplayContainer />,
          // eslint-disable-next-line react/jsx-key
          " Quick Play",
          "Advanced Options",
          quickPlay,
        ]
      : [
          null,
          // eslint-disable-next-line react/jsx-key
          "RUN IT BACK",
          "Change Settings",
          playAgain,
        ];

  return (
    <section className={"game_select_container"}>
      {modeDisplay}
      <button onClick={clickHandler} className={"game_options"}>
        {gamePlay}
      </button>
      <button
        onClick={() => toggleAdvanceOptions(!advancedOptions)}
        className={"game_options"}
      >
        {userChoice}
      </button>
      <ChangeModeContainer />
      {selectDifficulty}
    </section>
  );
}

GameSelectView.propTypes = {
  quickPlay: PropTypes.func,
  playAgain: PropTypes.func,
  winner: PropTypes.bool,
  gameType: PropTypes.string,
};
