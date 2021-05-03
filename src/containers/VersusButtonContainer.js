import { connect } from "react-redux";
import { setOnePlayer, setTwoPlayer } from "../actions/actions";
import { VersusModeButton } from "../views/buttons/VersusModeButton";

function mapDispatchtoState(dispatch) {
  return {
    onePlayer: () => dispatch(setOnePlayer()),
    twoPlayer: () => dispatch(setTwoPlayer()),
  };
}

export const VersusModeContainer = connect(
  null,
  mapDispatchtoState
)(VersusModeButton);
