import React, { useState } from 'react'

function RestartGameView(props){
  let { newGame } = props
  let [allowReset, allowDifficultyReset] = useState(false)
  let quickPlayButton = <button onClick={() => }>QuickPlay</button>
  let resetDifficultyButton = <button onClick={() => allowDifficultyReset(true)}>Reset Options</button>
  let resetScreen = allowReset ? 
  return (
    <>
      {quickPlayButton}
      {resetDifficultyButton}
      {resetScreen}
    </>
  )

}