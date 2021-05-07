import React from "react";
import { PropTypes } from "prop-types";

export function AddExtraTurnButton(props) {
  let { isTwoPlayer, addExtraTurn } = props;
  if (isTwoPlayer) {
    return null;
  }
  return (
    <button onClick={() => addExtraTurn()} className={"game_options"}>
      Add Extra Turn?
    </button>
  );
}

AddExtraTurnButton.propTypes = {
  isTwoPlayer: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  addExtraTurn: PropTypes.func,
};
