import React from "react";
import { ModeDisplayContainer } from "../containers/ModeDisplayContainer";
import { ScoreContainer } from "../containers/ScoreContainer";
import { CountdownTimerContainer } from "../containers/CountdownTimerContainer";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import { TurnsRemainingContainer } from "../containers/TurnsRemainingContainer";
import { PropTypes } from "prop-types";

export function TitleView(props) {
  let { gameType, gameStatus, numPlayers } = props;
  let gameInfo = null;
  let players = numPlayers ? (
    <p>Player {numPlayers.playerNumTurn} turn</p>
  ) : (
    <p>Single Player</p>
  );
  if (gameType === TIMED_MODE && gameStatus) {
    gameInfo = (
      <section className={"mode_info"}>
        <ModeDisplayContainer />
        <ScoreContainer />
        <CountdownTimerContainer />
        {players}
      </section>
    );
  }
  if (gameType === CLASSIC_MODE && gameStatus) {
    gameInfo = (
      <section className={"mode_info"}>
        <ModeDisplayContainer />
        <TurnsRemainingContainer />
        {players}
      </section>
    );
  }
  return (
    <section className={"title"}>
      <h1 className={"game_name"}>Mastermind</h1>
      {gameInfo}
    </section>
  );
}

TitleView.propTypes = {
  gameType: PropTypes.string,
  gameStatus: PropTypes.bool,
  numPlayers: PropTypes.object,
};
