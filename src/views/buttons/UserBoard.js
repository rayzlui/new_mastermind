import React from "react";
import { PropTypes } from "prop-types";

export function UserBoard(props) {
  let result = [];
  let { userBoard, changeInputSpot, userSelected } = props;

  for (let i = 0; i < userBoard.length; i++) {
    result.push(
      <button
        className={
          userSelected === i ? "highlight_userboard" : "regular_userboard"
        }
        key={`userboard index ${i}`}
        onClick={() => changeInputSpot(i)}
      >
        {userBoard[i] || "fill"}
      </button>
    );
  }
  return result;
}

UserBoard.propTypes = {
  userBoard: PropTypes.array,
  changeInputSpot: PropTypes.func,
  userSelected: PropTypes.number,
};
