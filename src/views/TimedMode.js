import React from "react";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { SubmitButtonContainer } from "../containers/SubmitButtonContainer";

export function TimedMode() {
  return (
    <>
      <section className={"user_input"}>
        <MoveHistoryContainer />

        <section className={"code_select"}>
          <h1>My Guess</h1>
          <UserBoardContainer />
        </section>
        <section className={"code_submit"}>
          <SubmitButtonContainer />
        </section>
      </section>
    </>
  );
}
