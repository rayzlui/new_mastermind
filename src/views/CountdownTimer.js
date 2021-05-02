import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

function minutesToMilliseconds(minutes) {
  let seconds = minutes * 60;
  let milliseconds = seconds * 1000;
  return milliseconds;
}
export function CountdownTimer(props) {
  let { endGame, timeAllowed } = props;
  let [remainingTime, updateTime] = useState(`${timeAllowed}:00`);

  let countDownFrom = useRef(minutesToMilliseconds(timeAllowed));
  useEffect(() => {
    let interval = setInterval(() => {
      countDownFrom.current -= 1000;

      if (countDownFrom.current <= 0) {
        endGame();
        clearInterval(interval);
      }
      let toMinutes = countDownFrom.current / 60000;
      let minutes = Math.floor(toMinutes);
      let toSeconds = countDownFrom.current % 60000;
      let seconds = Math.floor(toSeconds / 1000);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      updateTime(`${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endGame]);
  return <p>{`${remainingTime}`}</p>;
}

CountdownTimer.propTypes = {
  endGame: PropTypes.func,
  timeAllowed: PropTypes.number,
};
