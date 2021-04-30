import { connect } from 'react-redux'
import { versusComputer, versusPlayer } from '../actions/actions'
import { GameSelectView } from '../views/GameSelectView'

function mapStateToProps(state){
  return {
    gameStatus: state.gameStatus
  }
}

function mapDispatchToProps(dispatch){
  return {
    quickPlay: () => dispatch(versusComputer(4,8,10,4)),
    vsComputer: (arg) => {
      let integerize = arg.map(x=>parseInt(x))
      dispatch(versusComputer(...integerize))
    },
    vsPlayer: (arg)  => {
      let intergize = arg.map(x=>parseInt(x))
      dispatch(versusPlayer(...intergize))
    }

  }
}
export const GameSelectContainer = connect(mapStateToProps, mapDispatchToProps)(GameSelectView)