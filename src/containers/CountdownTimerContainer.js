import { connect } from 'react-redux'
import { gameLost } from '../actions/actions'
import { CountdownTimer } from '../views/CountdownTimer'

function mapStateToProps(state){
  return {
    timeAllowed: state.advancedOptions.timeAllowed
  }
}

function mapDispatchToProps(dispatch){
  return {
    endGame: () => dispatch(gameLost())
  }
}

export const CountdownTimerContainer = connect(mapStateToProps, mapDispatchToProps)(CountdownTimer)