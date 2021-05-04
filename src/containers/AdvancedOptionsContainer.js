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
      let integerize = arg.map((x) => parseInt(x));

      dispatch(newGame());
      dispatch(versusComputer(...integerize));
      dispatch({ type: SET_SCREEN_CHANGE });
    },
    vsPlayer: (arg) => {
      let intergize = arg.map((x) => parseInt(x));
      dispatch(newGame());
      dispatch(versusPlayer(...intergize));
    },
  };
}

export const AdvancedOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedOptionsView);
