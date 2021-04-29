import { connect } from 'react-redux'
import { versusPlayer, versusComputer } from '../actions/actions'
import { IntroScreen } from '../views/IntroScreen'

function mapDispatchToProps(dispatch){
  return {
    quickPlay: () => dispatch(versusComputer(4,7,10)),
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
export const IntroScreenContainer = connect(null, mapDispatchToProps)(IntroScreen)