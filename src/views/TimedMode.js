import React from "react";
import { CodeOptionsContainer } from "../containers/CodeOptionsContainer";
import { MoveHistoryContainer } from "../containers/MoveHistoryContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";
import { SubmitButtonContainer } from "../containers/SubmitButtonContainer";
import { CountdownTimerContainer } from "../containers/CountdownTimerContainer";
import { ScoreContainer } from "../containers/ScoreContainer";
import { ModeDisplayContainer } from "../containers/ModeDisplayContainer";

export function TimedMode() {
  return (
    <>
      <section className={"user_input"}>
        <ModeDisplayContainer />
        <ScoreContainer />
        <CountdownTimerContainer />
        <CodeOptionsContainer />
        <UserBoardContainer />
        <SubmitButtonContainer />
      </section>

      <MoveHistoryContainer />
    </>
  );
}
