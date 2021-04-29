import React from 'react'
import {hiddenCodeGenerator, checkUserGuess} from '../helpers/gameLogicFunctions'

export class Mastermind extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        gameMode: 'computer',
        remainingTurns: 10,
        correctAnswer: null,
        moveHistory: [],
        selectedInput: undefined,
        userBoard: {1: null, 2: null, 3: null, 4:null},
        numsSelected: 0,
        winner: false,
    }
    this.changeInputSpot = this.changeInputSpot.bind(this)
    this.inputChoiceInto = this.inputChoiceInto.bind(this)
  }
  async componentDidMount(){
    let correctCode = await hiddenCodeGenerator(4,7)
    this.setState({correctAnswer: correctCode})
  }

  runCheckCode(){
    let userBoardValues = Object.values(this.state.userBoard)
    let {code, countOfEachNum} = this.state.correctAnswer
    let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum)
    let winner = false
    console.log(checkAnswer)
    if (checkAnswer.red === userBoardValues.length){
        winner = true
        this.setState({winner: true})
    }else{
      let {red, white} = checkAnswer
      let previousMove = {moves: userBoardValues, redPegs: red, whitePegs: white}
      let copyMoveHistory = this.state.moveHistory.slice()
      copyMoveHistory.push(previousMove)
      this.setState({moveHistory: copyMoveHistory, remainingTurns: this.state.remainingTurns-1, numsSelected: 0,  userBoard: {1: null, 2: null, 3: null, 4:null}})
      console.log(this.state)
    }
  }
  inputChoiceInto(value){
    let selectedIndex = this.state.selectedInput
    let newUserBoard = Object.assign({},this.state.userBoard)
    let nextNumsSelected = this.state.numsSelected
    if (newUserBoard[selectedIndex] === null){
      nextNumsSelected++
    }
    newUserBoard[selectedIndex] = value
    this.setState({userBoard: newUserBoard, selectedInput: undefined, numsSelected: nextNumsSelected})

  }

  showSubmitButton(){
    if (this.state.numsSelected === 4){
      return <button onClick={() => this.runCheckCode()}>Submit Answer</button>
    }else{
      return null
    }
  }
 
  generateCodeChoices(num = 7){
    let result = []
    for (let i = 1; i <= num; i++){
      result.push(
          <button onClick={this.state.selectedInput ? () => this.inputChoiceInto(i) : null}>{i}</button>
        
      )
    }
    return <section>{result}</section>
  }

  changeInputSpot(input){
    this.setState({selectedInput: input})
  }
  
  generateUserBoard(){
    let result = []
    for (let spot in this.state.userBoard){
      result.push(
        <div>
          <button onClick={() => this.changeInputSpot(spot)}>{this.state.userBoard[spot] || 'fill'}</button>
        </div>
      )
    }
    return result
  }
    //possible guess choices
      //display previous turns
      //display turns remaining
      //userinput board
  turnsRemaining(){
    return (
      <div>
        <h2>Turns Remaining</h2>
        <h4>{this.state.remainingTurns}</h4>
      </div>
    )
  }

  generateMoveHistory(){
    let history = []
    let previousMoves = this.state.moveHistory
    for (let i = 0; i < previousMoves.length; i++){
      let {moves, redPegs, whitePegs} = previousMoves[i]
      history.push(
        <section>
          <h6>Move {i+1}</h6>
          <p>{moves}</p>
          <p>Correct Moves: {redPegs}</p>
          <p>Correct Color: {whitePegs}</p>
        </section>

      )
    }
    return history
  }
  render(){
    if (this.state.winner){
      return (
        <>
        <h1>You win!</h1>
        {this.generateMoveHistory()}
        </>
      )
    }
    if (this.state.remainingTurns === 0){
      return (
        <h1>You Lose :(</h1>
      )
    }
    return (
      <div className={'container'}> 
        <h1>Mastermind</h1> 
        {this.turnsRemaining()}
        {this.generateMoveHistory()}
        {this.generateCodeChoices()}
        {this.generateUserBoard()}
        {this.showSubmitButton()}
      </div>
    )
  }
}