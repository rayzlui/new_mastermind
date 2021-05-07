import React from "react";
import { PropTypes } from "prop-types";

export function VersusModeButton(props) {
  let { onePlayer, twoPlayer } = props;
  return (
    <section className={"versus_mode_seletor"}>
      <button onClick={onePlayer}>One Player</button>
      <button onClick={twoPlayer}>Two Player</button>
    </section>
  );
}

VersusModeButton.propTypes = {
  onePlayer: PropTypes.func,
  twoPlayer: PropTypes.func,
};
