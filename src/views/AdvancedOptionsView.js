import React, { useState } from "react";
import { CLASSIC_MODE } from "../actions/actionTypes";
import { PropTypes } from "prop-types";

export function AdvancedOptionsView(props) {
  let { vsPlayer, vsComputer, gameType } = props;
  let [codeLength, lengthChange] = useState(4);
  let [optionsLength, optionsChange] = useState(8);
  let [turnsLength, turnsChange] = useState(10);
  let [timeAllowed, changeTime] = useState(4);
  let gameTypeInputs =
    gameType === CLASSIC_MODE ? (
      <>
        <label>Number Of Turns</label>
        <input
          onChange={(event) => turnsChange(event.target.value)}
          type="range"
          className="slider"
          min="4"
          max="20"
          value={turnsLength}
          id="turns_length"
        ></input>
        <input
          onChange={(event) => turnsChange(event.target.value)}
          type="number"
          value={turnsLength}
          min="4"
          max="20"
        ></input>
        <button
          onClick={() =>
            vsComputer([codeLength, optionsLength, turnsLength, timeAllowed])
          }
        >
          Play Versus Computer
        </button>
        <button
          onClick={() =>
            vsPlayer([codeLength, optionsLength, turnsLength, timeAllowed])
          }
        >
          Play Versus Player
        </button>
      </>
    ) : (
      <>
        <label>Time Allowed</label>
        <input
          onChange={(event) => changeTime(event.target.value)}
          type="range"
          className="slider"
          min="1"
          max="10"
          value={timeAllowed}
          id="turns_length"
        ></input>
        <input
          onChange={(event) => changeTime(event.target.value)}
          type="number"
          value={timeAllowed}
          min="1"
          max="10"
        ></input>
        <button
          onClick={() =>
            vsComputer([codeLength, optionsLength, turnsLength, timeAllowed])
          }
        >
          Play
        </button>
      </>
    );
  return (
    <section>
      <h3>Select Difficulty</h3>
      <label>Code Length</label>
      <input
        onChange={(event) => lengthChange(event.target.value)}
        type="range"
        className="slider"
        min="4"
        max="20"
        value={codeLength}
        id="code_length"
      ></input>
      <input
        onChange={(event) => lengthChange(event.target.value)}
        type="number"
        value={codeLength}
        min="4"
        max="20"
      ></input>
      <label>Number Of Options</label>
      <input
        onChange={(event) => optionsChange(event.target.value)}
        type="range"
        className="slider"
        min="7"
        max="50"
        value={optionsLength}
        id="options_length"
      ></input>
      <input
        onChange={(event) => optionsChange(event.target.value)}
        type="number"
        value={optionsLength}
        min="7"
        max="50"
      ></input>
      {gameTypeInputs}
    </section>
  );
}

AdvancedOptionsView.propTypes = {
  vsPlayer: PropTypes.func,
  vsComputer: PropTypes.func,
  gameType: PropTypes.string,
};
