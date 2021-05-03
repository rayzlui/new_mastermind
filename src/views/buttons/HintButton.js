import React from "react";
import { PropTypes } from "prop-types";

export function HintButton(props) {
  let { requestHint, hintCount } = props;
  return hintCount < 4 ? (
    <button onClick={() => requestHint()}>Request Hint</button>
  ) : null;
}

HintButton.propTypes = {
  requestHint: PropTypes.func,
  hintCount: PropTypes.number,
};
