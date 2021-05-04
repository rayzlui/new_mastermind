import React from "react";
import { CLASSIC_MODE, TIMED_MODE } from "../../actions/actionTypes";
import store from "../../createStore";

export function IntroScreenView() {
  return (
    <section className={"intro_screen"}>
      <button
        onClick={() => store.dispatch({ type: CLASSIC_MODE })}
        className={"game_options"}
      >
        Classic Mode
      </button>
      <button
        onClick={() => store.dispatch({ type: TIMED_MODE })}
        className={"game_options"}
      >
        Timed Mode
      </button>
    </section>
  );
}
