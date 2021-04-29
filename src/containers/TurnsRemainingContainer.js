import { connect } from 'react-redux'
import { TurnsRemaining } from '../views/TurnsRemaining'

function mapStateToProps(state){
  return {
    turns: state.advancedOptions.turns
  }
}

export const TurnsRemainingContainer = connect(mapStateToProps)(TurnsRemaining)