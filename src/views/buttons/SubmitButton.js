import React, { useState } from "react";
import { PropTypes } from "prop-types";

export function SubmitButton(props) {
  const { numbersGuessed, submit, codeLength } = props;
  let [clickCount, clickAction] = useState(0);
  let handleClick = () => {
    clickAction(clickCount + 1);
    if (clickCount === 1) {
      alert("Guess Incomplete");
    }
    if (clickCount === 4) {
      alert(
        `Please completely fill out your guess before hitting the submit button. It should be ${codeLength} characters long.`
      );
    }

    if (clickCount === 7) {
      alert(
        `Please enter ${codeLength} characters . This is your second to last warning.`
      );
    }

    if (clickCount === 10) {
      alert("Don't make me do this.");
    }

    if (clickCount === 13) {
    }
    return null;
  };
  if (numbersGuessed >= codeLength) {
    handleClick = submit;
  }
  return (
    <button onClick={handleClick} className={"game_options"}>
      Submit Answer
    </button>
  );
}

SubmitButton.propTypes = {
  numbersGuessed: PropTypes.number,
  submit: PropTypes.func,
  codeLength: PropTypes.number,
};
