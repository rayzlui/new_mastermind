import {connect} from 'react-redux'
import { gameWon, actionUserMoveToHistory, gameLost, versusComputer, updateScore } from '../actions/actions'
import {checkUserGuess} from '../gameLogic/gameLogicFunctions'
import store from '../createStore'
import {SubmitButton} from '../views/SubmitButton'
import { CLASSIC_MODE, TIMED_MODE } from '../actions/actionTypes'

function mapStateToProps(state){
  return {
    numbersGuessed: state.userBoard.numbersGuessed,
    codeLength: state.advancedOptions.codeLength,
  }
}

function mapDispatchToProps(dispatch){
  return{
 
      //handle logic to seperate timedMode vs classicMode
    submit: () => {
      let state = store.getState()
      let userBoardValues = Object.values(state.userBoard.board)
      let {code, countOfEachNum} = state.correctCode
      let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum)
      let {red, white} = checkAnswer
      let previousMove = {moves: userBoardValues, redPegs: red, whitePegs: white}
      if (state.gameType === CLASSIC_MODE){
        if (checkAnswer.red === userBoardValues.length){
            dispatch(gameWon())
        }else{
          if (state.advancedOptions.turnsAllowed - state.advancedOptions.turnsMade === 1){
            dispatch(gameLost())
          }
            dispatch(actionUserMoveToHistory(previousMove))
        } 
      }else if (state.gameType === TIMED_MODE){
        if(checkAnswer.red === userBoardValues.length){
          dispatch(updateScore())
          let { codeLength, codeOptions} = state.advancedOptions
          dispatch(versusComputer(codeLength, codeOptions))
          previousMove['correctGuess'] = true 
        }
        dispatch(actionUserMoveToHistory(previousMove))
      }
        
        
    }
      
  }
}

export const SubmitButtonContainer = connect(mapStateToProps,mapDispatchToProps)(SubmitButton)