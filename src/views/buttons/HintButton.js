import React from "react";
import { PropTypes } from "prop-types";

export function HintButton(props) {
  //since set code is async, i can mash the hint button and break it in timed mode
  let { requestHint, hintCount, correctCode } = props;
  return correctCode && hintCount < correctCode.code.length - 2 ? (
    <button onClick={() => requestHint()}>Request Hint</button>
  ) : null;
}

HintButton.propTypes = {
  requestHint: PropTypes.func,
  hintCount: PropTypes.number,
  correctCode: PropTypes.object,
};
