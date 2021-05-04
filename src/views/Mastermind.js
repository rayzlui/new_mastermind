import React from "react";
import { GameSelectContainer } from "../containers/GameSelectContainer";
import { PlayerCreateCodeView } from "./PlayerCreateCodeView";
import { GameOverContainer } from "../containers/GameOverContainer";
import { IntroScreenView } from "./buttons/IntroScreenView";
import { VersusModeContainer } from "../containers/VersusButtonContainer";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import PropTypes from "prop-types";
import {
  ClassicModeContainer,
  TimedModeContainer,
} from "../containers/PlayModeContainers";

export function Mastermind(props) {
  let { gameStatus, winner, versusComputer, gameType, isTwoPlayer } = props;
  //if game type is null, means we haven't started the game at all, display intro screen
  if (isTwoPlayer === null) {
    return <VersusModeContainer />;
  }
  if (gameType === null) {
    return <IntroScreenView />;
  }
  let display;
  //if winner is not null, means game is over.
  if (winner !== null) {
    display = <GameOverContainer />;
  } else if (!gameStatus) {
    //if game status is false, means we've selected game type, no winner or loser, so we need to set code options
    if (versusComputer === false) {
      //by default versus computer is null, will only run if gameStatus is false and versus computer is false aka after GameSelect has chosen vs player
      display = (
        <section className={"start_game_select"}>
          <PlayerCreateCodeView />
        </section>
      );
    } else {
      //if game status is false, means we need to set up game.
      display = (
        <section className={"start_game_select"}>
          <GameSelectContainer />
        </section>
      );
    }

    //if game started, no winner, and game type is selected, one of these will run
  } else if (gameType === TIMED_MODE) {
    //if game started, no winner, and game type is selected, one of these will run
    display = <TimedModeContainer />;
  } else if (gameType === CLASSIC_MODE) {
    display = <ClassicModeContainer />;
  }

  return display;
}

Mastermind.propTypes = {
  gameStatus: PropTypes.bool,
  winner: PropTypes.bool,
  versusComputer: PropTypes.bool,
  gameType: PropTypes.string,
};
