import React, { useState } from 'react' 
import { CLASSIC_MODE, TIMED_MODE } from '../actions/actionTypes'
import { GameSelectContainer } from '../containers/GameSelectContainer'
import { MoveHistoryContainer } from '../containers/MoveHistoryContainer'
import { ScoreContainer } from '../containers/ScoreContainer'


export function GameOverView(props){
  let { winner, showCode, oneMoreChance, gameType } = props
  let [newGame, toggleNewGame] = useState(false)
  let [isAnswerSeen, showAnswer] = useState(false)
  

  let playAgainButton = newGame ? null : <button onClick={() => toggleNewGame(!newGame)}>Play Again?</button>
  let gameSelect = newGame ? <GameSelectContainer /> : null
  if (gameType === CLASSIC_MODE){
    let [showAnswerButton, answer] = isAnswerSeen ? [null, <p>{showCode}</p> ]: [null, <button onClick={() => showAnswer(true)}>Show Answer</button>]
    let isWinner = winner?  <h1>You win :(</h1> : 
      <>
        <h1>You lose :)</h1> 
        <button onClick={oneMoreChance}>One More Chance</button>
      </>
    return (
      <section >
        <MoveHistoryContainer/>
        {isWinner}
        {showAnswerButton}
        {answer}
        {playAgainButton}
        {gameSelect}
      </section>
    )
  }else if (gameType === TIMED_MODE){
    return (
    <>
      <MoveHistoryContainer/>
      <ScoreContainer />
      {playAgainButton}
      {gameSelect}
    </>
    )
  }
}