import {connect} from 'react-redux'
import { oneMoreChance } from '../actions/actions'
import { GameOverView } from '../views/GameOverView'

function mapStateToProps(state){
  return {
    winner: state.winner,
    showCode: state.correctCode.code,
    gameType: state.gameType
  }
}

function mapDispatchToState(dispatch){
  return {
    oneMoreChance: () => dispatch(oneMoreChance())
  }
}

export const GameOverContainer = connect(mapStateToProps, mapDispatchToState)(GameOverView)