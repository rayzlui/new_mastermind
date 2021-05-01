import React from 'react'

export function MoveHistory(props){
    let history = []
    let {previousMoves} = props
    for (let i = 0; i < previousMoves.length; i++){
      let {moves, redPegs, whitePegs, correctGuess} = previousMoves[i]
      let correctNotification = null
      if (correctGuess){
        correctNotification = <p>Correct Answer</p>
      }
      history.push(
        <section>
          <h6>Move </h6>
          <p>{moves}</p>
          <p>Correct Moves: {redPegs}</p>
          <p>Correct Color: {whitePegs}</p>
          {correctNotification}
        </section>

      )
    }
    return history
  }
