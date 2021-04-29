import React from 'react'

export function MoveHistory(props){
    let history = []
    let {previousMoves} = props
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
