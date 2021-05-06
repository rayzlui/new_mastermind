import { connect } from "react-redux";
import {
  versusPlayer,
  versusComputer,
  newGame,
  setTwoPlayer,
} from "../actions/actions";
import { SET_SCREEN_CHANGE } from "../actions/actionTypes";
import store from "../createStore";
import { AdvancedOptionsView } from "../views/AdvancedOptionsView";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
    isTwoPlayer: state.isTwoPlayer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    vsComputer: (arg) => {
      let state = store.getState();
      if (state.isTwoPlayer) {
        dispatch(setTwoPlayer());
      }
      dispatch(newGame());
      dispatch(versusComputer(arg));
      dispatch({ type: SET_SCREEN_CHANGE });
    },
    vsPlayer: (arg) => {
      dispatch(newGame());
      dispatch(versusPlayer(arg));
    },
  };
}

export const AdvancedOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedOptionsView);
