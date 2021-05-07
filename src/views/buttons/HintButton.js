import React from "react";
import { PropTypes } from "prop-types";

export function HintButton(props) {
  //since set code is async, user can hit the the hint button repeatly and break it in timed mode
  //will only display when correctCode is set.
  let { requestHint, hintCount, correctCode } = props;
  return correctCode && hintCount < correctCode.length - 2 ? (
    <button onClick={() => requestHint()}>Request Hint</button>
  ) : null;
}

HintButton.propTypes = {
  requestHint: PropTypes.func,
  hintCount: PropTypes.number,
  correctCode: PropTypes.array,
};
