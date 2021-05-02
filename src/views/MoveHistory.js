import React from "react";
import { PropTypes } from "prop-types";

function sentenceOne(code, red, white) {
  return `Hey, your last code: ${code}, had ${red} exactly right and ${white} that were in the wrong place. Almost there!`;
}

function sentenceTwo(code, red, white) {
  return `Code: ${code}, had ${red} correct, ${white} were spotted else where in the code`;
}

function sentenceThree(code, red, white) {
  return `OMG YOU HAD ${red} PERFECTS, ON THE SPOT, ABSOLUTELY PERFECT AND ${white}... almost perfects. Try again friend.`;
}

function randomPhraseGenerator(code, red, white, correct = false) {
  let store = [sentenceOne, sentenceTwo, sentenceThree];
  let random = Math.floor(Math.random() * store.length);
  if (correct) {
    return `Well done! ${code} was exactly it!`;
  }
  return store[random](code, red, white);
}

export function MoveHistory(props) {
  let { previousMoves } = props;
  let display;
  if (previousMoves) {
    let history = [];
    for (let i = 0; i < previousMoves.length; i++) {
      let { moves, redPegs, whitePegs, correctGuess } = previousMoves[i];

      history.push(
        <p key={`move history ${i}`}>
          Move {`${i + 1}`}
          <br />
          {randomPhraseGenerator(
            moves.join(" | "),
            redPegs,
            whitePegs,
            correctGuess
          )}
        </p>
      );
    }
    display = history;
  } else {
    display = null;
  }
  return (
    <section id={"move_history_container"}>
      <h1>Move History</h1>
      {display}
    </section>
  );
}

MoveHistory.propTypes = {
  previousMoves: PropTypes.array,
};
