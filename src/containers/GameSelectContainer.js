import { connect } from "react-redux";
import {
  newGame,
  setTwoPlayer,
  versusComputer,
  versusPlayer,
} from "../actions/actions";
import { GameSelectView } from "../views/buttons/GameSelectView";
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
      let state = store.getState();
      dispatch(newGame());
      dispatch(versusComputer([4, 8, 10, 4]));
      if (state.isTwoPlayer) {
        dispatch({ type: SET_SCREEN_CHANGE });
        dispatch(setTwoPlayer());
      }
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
      dispatch(newGame());
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
export const GameSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSelectView);
