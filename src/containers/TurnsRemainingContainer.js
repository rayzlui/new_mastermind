import { connect } from 'react-redux'
import { TurnsRemaining } from '../views/TurnsRemaining'

function mapStateToProps(state){
  return {
    turnsAllowed: state.advancedOptions.turnsAllowed,
    turnsMade: state.advancedOptions.turnsMade,
  }
}

export const TurnsRemainingContainer = connect(mapStateToProps)(TurnsRemaining)