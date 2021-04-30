import {connect} from 'react-redux'
import { gameWon, actionUserMoveToHistory, gameLost } from '../actions/actions'
import {checkUserGuess} from '../gameLogic/gameLogicFunctions'
import store from '../createStore'
import {SubmitButton} from '../views/SubmitButton'

function mapStateToProps(state){
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
  }
}

function mapDispatchToProps(dispatch){
  return{
 
    submit: () => {
      let state = store.getState()
      let userBoardValues = Object.values(state.userBoard.board)
      let {code, countOfEachNum} = state.correctCode
      let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum)
      if (checkAnswer.red === userBoardValues.length){
          dispatch(gameWon())
      }else{
        if (state.advancedOptions.turns === 1){
          dispatch(gameLost())
        }
        let {red, white} = checkAnswer
        let previousMove = {moves: userBoardValues, redPegs: red, whitePegs: white}
        dispatch(actionUserMoveToHistory(previousMove))
        
        
      }
      
    
    }
  }
}

export const SubmitButtonContainer = connect(mapStateToProps,mapDispatchToProps)(SubmitButton)