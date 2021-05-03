import React from "react";
import { CreateOwnCodeSubmitContainer } from "../containers/CreateOwnCodeSubmitContainer";
import { UserBoardContainer } from "../containers/UserBoardContainer";

export function PlayerCreateCodeView(props) {
  return (
    <section>
      <h1>Design Code</h1>
      <UserBoardContainer />
      <CreateOwnCodeSubmitContainer />
    </section>
  );
}
