import { connect } from "react-redux";
import { newGame, versusComputer, versusPlayer } from "../actions/actions";
import { GameSelectView } from "../views/buttons/GameSelectView";
import store from "../createStore";

function mapStateToProps(state) {
  return {
    winner: state.winner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quickPlay: () => {
      dispatch(newGame());
      dispatch(versusComputer(4, 8, 10, 4));
    },
    playAgain: () => {
      let state = store.getState();
      dispatch(newGame());
      let {
        computer,
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
      } = state.advancedOptions;
      if (computer) {
        dispatch(
          versusComputer(codeLength, codeOptions, turnsAllowed, timeAllowed)
        );
      } else {
        dispatch(
          versusPlayer(codeLength, codeOptions, turnsAllowed, timeAllowed)
        );
      }
    },
  };
}
export const GameSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSelectView);
