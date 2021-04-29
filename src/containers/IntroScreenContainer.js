import { connect } from 'react-redux'
import { versusPlayer, versusComputer } from '../actions/actions'
import { IntroScreen } from '../views/IntroScreen'

function mapDispatchToProps(dispatch){
  return {
    quickPlay: () => dispatch(versusComputer(4,7,10)),
    vsComputer: (codeLength, codeOptions,turns) => {
      dispatch(versusComputer(codeLength, codeOptions,turns))
    },
    vsPlayer: (codeLength, codeOptions,turns)  => {
      dispatch(versusPlayer(codeLength, codeOptions,turns))
    }

  }
}
export const IntroScreenContainer = connect(null, mapDispatchToProps)(IntroScreen)