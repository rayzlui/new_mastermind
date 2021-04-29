import { connect } from 'react-redux'
import { Mastermind } from '../views/GamePage'

function mapStateToProps(state){
  return({
    gameStatus: state.gameStatus,
    winner: state.winner, 
    versusComputer: state.advancedOptions.computer,
  })
}

export const MastermindContainer = connect(mapStateToProps)(Mastermind)