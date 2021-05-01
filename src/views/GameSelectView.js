import React, {useState} from 'react'
import { AdvancedOptionsContainer } from '../containers/AdvancedOptionsContainer'

export function GameSelectView(props){ 
  let {quickPlay, playAgain, winner} = props
  let [advancedOptions, toggleAdvanceOptions] = useState(false)

  let selectDifficulty = advancedOptions ? <AdvancedOptionsContainer/>: null
  let [gamePlay, userChoice] = winner === null ? [<button onClick={quickPlay}>Quick Play</button>, 'Advanced Options'] :[ <button onClick={playAgain}>Play Again</button>, 'Change Settings']

  return(
    <>
      {gamePlay}
      <button onClick={() => toggleAdvanceOptions(!advancedOptions)}>{userChoice} </button>
      {selectDifficulty}
      
    </>

  )
}