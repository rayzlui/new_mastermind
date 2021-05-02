import React, { useState } from "react";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import { GameSelectContainer } from "../containers/GameSelectContainer";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { ScoreContainer } from "../containers/ScoreContainer";
import { ChangeModeContainer } from "../containers/ChangeModeContainer";
import { PropTypes } from "prop-types";

export function GameOverView(props) {
  let { winner, showCode, oneMoreChance, gameType } = props;
  let [newGame, toggleNewGame] = useState(false);
  let [isAnswerSeen, showAnswer] = useState(false);

  let playAgainButton = newGame ? null : (
    <button onClick={() => toggleNewGame(!newGame)}>Play Again?</button>
  );
  let gameSelect = newGame ? <GameSelectContainer /> : null;

  if (gameType === CLASSIC_MODE) {
    let [showAnswerButton, answer] = isAnswerSeen
      ? // eslint-disable-next-line react/jsx-key
        [null, <p>{showCode}</p>]
      : // eslint-disable-next-line react/jsx-key
        [null, <button onClick={() => showAnswer(true)}>Show Answer</button>];
    let isWinner = winner ? (
      <h1>You win :(</h1>
    ) : (
      <>
        <h1>You lose :)</h1>
        <button onClick={oneMoreChance}>One More Chance</button>
      </>
    );
    return (
      <section>
        <h1>Classic Mode</h1>
        {isWinner}
        {answer}
        <MoveHistoryContainer />
        {showAnswerButton}
        {playAgainButton}
        {gameSelect}
        <ChangeModeContainer />
      </section>
    );
  } else if (gameType === TIMED_MODE) {
    return (
      <section>
        <h1>Timed Mode</h1>
        <MoveHistoryContainer />
        <ScoreContainer />
        {playAgainButton}
        {gameSelect}
        <ChangeModeContainer />
      </section>
    );
  }
}

GameOverView.propTypes = {
  winner: PropTypes.bool,
  showCode: PropTypes.array,
  oneMoreChance: PropTypes.func,
  gameType: PropTypes.string,
  switchModes: PropTypes.func,
};
