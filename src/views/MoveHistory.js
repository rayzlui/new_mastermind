import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

function sentenceOne(red, white) {
  return `Hey, your last code had ${red} exactly right and ${white} that were in the wrong place. Almost there!`;
}

function sentenceTwo(red, white) {
  return `Above code had ${red} correct, ${white} were spotted else where in the code`;
}

function sentenceThree(red, white) {
  return `OMG YOU HAD ${red} PERFECTS, ON THE SPOT, ABSOLUTELY PERFECT AND ${white}... almost perfects. Try again friend.`;
}

function randomPhraseGenerator(red, white, correct = false, random) {
  let store = [sentenceOne, sentenceTwo, sentenceThree];
  if (correct) {
    return `Well done! That was exactly it!`;
  }
  return store[random](red, white);
}

const PegDisplay = styled.section`
  background-color: ${(props) => props.color};
  height: 25px;
  width: 25px;
  display: inline-block;
  border: 1px black solid;
`;

export function MoveHistory(props) {
  let { previousMoves, pegColors } = props;
  let display;
  if (previousMoves.length > 0) {
    let history = [];
    for (let i = previousMoves.length - 1; i >= 0; i--) {
      let {
        moves,
        redPegs,
        whitePegs,
        correctGuess,
        randomPhrase,
      } = previousMoves[i];
      let pegsDisplay = moves.map((move, index) => {
        return <PegDisplay key={`peg ${index}`} color={pegColors[move]} />;
      });

      history.push(
        <section key={`move history${i}`}>
          <h3>Move {moves.join(" | ")}</h3>
          <p key={`move history ${i}`}></p>
          {pegsDisplay}
          <br />
          {randomPhraseGenerator(
            redPegs,
            whitePegs,
            correctGuess,
            randomPhrase
          )}
        </section>
      );
    }
    display = history;
  } else {
    display = <p>Here is a brand new secret code! Start guessing!</p>;
  }
  return (
    <section id={"move_history_container"}>
      <section className={"move_history_title"}>
        <h1>Move History</h1>
      </section>
      <section className={"history_display"}>{display}</section>
    </section>
  );
}

MoveHistory.propTypes = {
  previousMoves: PropTypes.array,
  pegColors: PropTypes.object,
};
