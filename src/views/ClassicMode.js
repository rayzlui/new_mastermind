import React from "react";
import { CodeOptionsContainer } from "../containers/CodeOptionsContainer";
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
        <ModeDisplayContainer />
        <TurnsRemainingContainer />
        <CodeOptionsContainer />
        <UserBoardContainer />
        <SubmitButtonContainer />
        <AddExtraTurnButton />
      </section>
      <MoveHistoryContainer />
    </>
  );
}
