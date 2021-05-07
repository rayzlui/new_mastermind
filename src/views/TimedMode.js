import React from "react";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { HintButtonContainer } from "../containers/HintButtonContainer";
import { PropTypes } from "prop-types";
import { ChangeTurnContainer } from "../containers/ChangeTurnContainer";
import { TimedModeSubmitContainer } from "../containers/TimedModeSubmitContainer";

export function TimedMode(props) {
  let { turnChange } = props;
  if (turnChange) {
    return <ChangeTurnContainer />;
  }
  return (
    <>
      <section className={"user_input"}>
        <MoveHistoryContainer />

        <section className={"code_select"}>
          <h1>My Guess</h1>
          <UserBoardContainer />
        </section>
        <section className={"code_submit"}>
          <TimedModeSubmitContainer />
          <HintButtonContainer />
        </section>
      </section>
    </>
  );
}
TimedMode.propTypes = {
  turnChange: PropTypes.bool,
};
