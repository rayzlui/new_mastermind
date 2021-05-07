import { connect } from "react-redux";
import { setTwoPlayer, versusComputer, versusPlayer } from "../actions/actions";
import { GameOptionsView } from "../views/buttons/GameOptionsView";
import store from "../createStore";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";

function mapStateToProps(state) {
  return {
    winner: state.winner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quickPlay: () => {
      dispatch(versusComputer([4, 8, 10, 4]));
      dispatch({ type: SET_SCREEN_CHANGE });
    },
    playAgain: () => {
      let state = store.getState();
      let {
        computer,
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
      } = state.advancedOptions;
      if (state.isTwoPlayer) {
        dispatch({ type: SET_SCREEN_CHANGE });
        dispatch(setTwoPlayer());
      }
      if (computer) {
        dispatch(
          versusComputer([codeLength, codeOptions, turnsAllowed, timeAllowed])
        );
      } else {
        dispatch(
          versusPlayer([codeLength, codeOptions, turnsAllowed, timeAllowed])
        );
      }
    },
  };
}
export const GameOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOptionsView);
