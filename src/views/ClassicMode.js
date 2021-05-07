import React from "react";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { HintButtonContainer } from "../containers/HintButtonContainer";
import { ChangeTurnContainer } from "../containers/ChangeTurnContainer";
import { PropTypes } from "prop-types";
import { ClassicModeSubmit } from "../containers/ClassicModeSubmit";
import { AddExtraTurnContainer } from "../containers/AddExtraTurnContainer";

export function ClassicMode(props) {
  let { turnChange } = props;
  if (turnChange) {
    return <ChangeTurnContainer />;
  }
  return (
    <>
      <section className={"user_input"}>
        <MoveHistoryContainer />
        <section className={"input_section"}>
          <h1>My Guess</h1>
          <UserBoardContainer />
        </section>
        <section className={"code_submit"}>
          <ClassicModeSubmit />
          <HintButtonContainer />
          <AddExtraTurnContainer />
        </section>
      </section>
    </>
  );
}

ClassicMode.propTypes = {
  turnChange: PropTypes.bool,
};
