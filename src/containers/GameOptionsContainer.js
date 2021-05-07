import { connect } from "react-redux";
import { setTwoPlayer, versusComputer, versusPlayer } from "../actions/actions";
import { GameOptionsView } from "../views/buttons/GameOptionsView";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";

function mapStateToProps(state) {
  return {
    winner: state.winner,
    isTwoPlayer: state.isTwoPlayer,
    advancedOptions: state.advancedOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quickPlay: () => {
      dispatch(versusComputer([4, 8, 10, 4]));
      dispatch({ type: SET_SCREEN_CHANGE });
    },
    playAgain: (options) => {
      let {
        computer,
        codeLength,
        codeOptions,
        turnsAllowed,
        timeAllowed,
      } = options.advancedOptions;
      if (options.isTwoPlayer) {
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

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { winner, isTwoPlayer, advancedOptions } = mapStateToProps;
  let { quickPlay, playAgain } = mapDispatchToProps;
  return {
    winner: winner,
    quickPlay: () => quickPlay(),
    playAgain: () => {
      playAgain({ isTwoPlayer, advancedOptions });
    },
  };
}
export const GameOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GameOptionsView);
