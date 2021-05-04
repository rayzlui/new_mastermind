import React, { useState } from "react";
import { CLASSIC_MODE, TIMED_MODE } from "../actions/actionTypes";
import { GameSelectContainer } from "../containers/GameSelectContainer";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { ScoreContainer } from "../containers/ScoreContainer";
import { PropTypes } from "prop-types";

export function GameOverView(props) {
  let { winner, showCode, oneMoreChance, gameType, isTwoPlayer } = props;
  let [newGame, toggleNewGame] = useState(false);
  let [isAnswerSeen, showAnswer] = useState(false);
  let playAgainButton = newGame ? null : (
    <button onClick={() => toggleNewGame(!newGame)}>Play Again?</button>
  );
  let gameSelect = newGame ? <GameSelectContainer /> : null;
  if (isTwoPlayer) {
    let score1 = isTwoPlayer[1];
    let score2 = isTwoPlayer[2];
    let moveCounts = (
      <>
        <p>Player 1: {score1} </p>
        <p>Player2: {score2} </p>
      </>
    );
    if (score1 === score2) {
      return (
        <section className={"intro_screen"}>
          <h1>DRAW!</h1>
          <p>Yall should play again</p>
          {moveCounts}

          {playAgainButton}
          {gameSelect}
        </section>
      );
    }
    let winner, loser, moves;
    if (gameType === TIMED_MODE) {
      [winner, loser, moves] =
        score1 > score2
          ? [1, 2, `getting ${score1 - score2} more correct`]
          : [2, 1, `getting ${score2 - score1} more correct`];
    } else {
      [winner, loser, moves] =
        score1 > score2
          ? [2, 1, `${score1 - score2} moves`]
          : [1, 2, `${score2 - score1} moves`];
    }

    return (
      <section className={"intro_screen"}>
        <h1>Congratulations: Player {winner}</h1>
        <p>
          You beat Player {loser} by {moves}{" "}
        </p>
        {moveCounts}
        {playAgainButton}
        {gameSelect}
      </section>
    );
  }

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
      <>
        <section className={"gameover_view"}>
          <h1>Game Over!</h1>
          <h3>You Played Classic Mode</h3>
          {isWinner}
          <MoveHistoryContainer />
          {answer}
          {showAnswerButton}
          {playAgainButton}
          {gameSelect}
        </section>
      </>
    );
  } else if (gameType === TIMED_MODE) {
    return (
      <>
        <section className={"gameover_view"}>
          <h1>Game Over!</h1>
          <h3>You Played Timed Mode</h3>
          <ScoreContainer />
          <MoveHistoryContainer />
          {playAgainButton}
          {gameSelect}
        </section>
      </>
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
