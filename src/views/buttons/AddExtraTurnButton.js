import React from "react";
import { addExtraTurn } from "../../actions/actions";
import store from "../../createStore";

export function AddExtraTurnButton() {
  let state = store.getState();
  if (state.isTwoPlayer) {
    return null;
  }
  return (
    <button
      onClick={() => store.dispatch(addExtraTurn())}
      className={"game_options"}
    >
      Add Extra Turn?
    </button>
  );
}
