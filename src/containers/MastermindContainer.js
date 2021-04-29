import { connect } from 'react-redux'
import { Mastermind } from '../views/GamePage'

function mapStateToProps(state){
  return({
    gameStatus: state.gameStatus,
    winner: state.winner, 
  })
}

export const MastermindContainer = connect(mapStateToProps)(Mastermind)