import React from "react";
import { PropTypes } from "prop-types";

export function CodeOptions(props) {
  let { userSelected, inputChoiceInto, gameSize } = props;
  let result = [];
  for (let i = 1; i <= gameSize; i++) {
    result.push(
      <button
        onClick={
          userSelected !== null ? () => inputChoiceInto(userSelected, i) : null
        }
        className={"code_options"}
      >
        {i}
      </button>
    );
  }
  return result;
}

CodeOptions.propTypes = {
  userSelected: PropTypes.number,
  inputChoiceInto: PropTypes.func,
  gameSize: PropTypes.number,
};
