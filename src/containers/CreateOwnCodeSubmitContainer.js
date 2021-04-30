import { connect } from 'react-redux'
import { setCode } from '../actions/actions'
import { START_PLAYER } from '../actions/actionTypes'
import store from '../createStore'
import { SubmitButton } from '../views/SubmitButton'

function mapStateToProps(state){
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
  }
}


function mapDispatchToProps(dispatch){
    return {
      submit: () => {
        let state = store.getState()
        let codeCreated = state.userBoard.board
        let numCount = codeCreated.reduce((acc,num) => {
          acc[num] = acc[num] + 1 || 1
          return acc
        }, {})
        dispatch(setCode({code: codeCreated, countOfEachNum: numCount}))
        dispatch({type: START_PLAYER, codeLength: codeCreated.length})
      }
    }
}

export const CreateOwnCodeSubmitContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitButton)