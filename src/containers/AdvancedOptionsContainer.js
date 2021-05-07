import { connect } from "react-redux";
import {
  versusPlayer,
  versusComputer,
  newGame,
  setTwoPlayer,
} from "../actions/actions";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";
import { AdvancedOptionsView } from "../views/AdvancedOptionsView";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
    isTwoPlayer: state.isTwoPlayer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startComputer: (arg) => {
      dispatch(newGame());
      dispatch(versusComputer(arg));
      dispatch({ type: SET_SCREEN_CHANGE });
    },
    startPlayer: (arg) => {
      dispatch(newGame());
      dispatch(versusPlayer(arg));
    },
    startTwoPlayer: () => {
      dispatch(setTwoPlayer());
    },
  };
}

function mergeProps(mapStateToProps, mapDispatchToProps) {
  let { gameType, isTwoPlayer } = mapStateToProps;
  let { startComputer, startPlayer, startTwoPlayer } = mapDispatchToProps;
  return {
    gameType,
    isTwoPlayer,
    vsComputer: (args) => {
      startComputer(args);
      if (isTwoPlayer) {
        startTwoPlayer();
      }
    },
    vsPlayer: (args) => {
      startPlayer(args);
    },
  };
}

export const AdvancedOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AdvancedOptionsView);
