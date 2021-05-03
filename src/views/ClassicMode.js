import React from "react";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { SubmitButtonContainer } from "../containers/SubmitButtonContainer";
import { TurnsRemainingContainer } from "../containers/TurnsRemainingContainer";
import { AddExtraTurnButton } from "./buttons/AddExtraTurnButton";
import { ModeDisplayContainer } from "../containers/ModeDisplayContainer";

export function ClassicMode(props) {
  return (
    <>
      <section className={"user_input"}>
        <MoveHistoryContainer />
        <section className={"input_section"}>
          <h1>My Guess</h1>
          <UserBoardContainer />
        </section>
        <section className={"code_submit"}>
          <SubmitButtonContainer />
          <AddExtraTurnButton />
        </section>
      </section>
    </>
  );
}
