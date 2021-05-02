import { connect } from "react-redux";
import { versusPlayer, versusComputer, newGame } from "../actions/actions";
import { AdvancedOptionsView } from "../views/AdvancedOptionsView";

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    vsComputer: (arg) => {
      let integerize = arg.map((x) => parseInt(x));

      dispatch(newGame());
      dispatch(versusComputer(...integerize));
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
