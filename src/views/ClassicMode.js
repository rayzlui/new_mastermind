import React from "react";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { SubmitButtonContainer } from "../containers/SubmitButtonContainer";
import { AddExtraTurnButton } from "./buttons/AddExtraTurnButton";
import { HintButtonContainer } from "../containers/HintButtonContainer";

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
          <HintButtonContainer />
          <AddExtraTurnButton />
        </section>
      </section>
    </>
  );
}
