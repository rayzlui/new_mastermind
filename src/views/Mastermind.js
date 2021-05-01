import React from 'react'
import { GameSelectContainer } from '../containers/GameSelectContainer'
import { PlayerCreateCodeView } from './PlayerCreateCodeView'
import { GameOverContainer } from '../containers/GameOverContainer'
import { ClassicMode } from './ClassicMode'
import { TimedMode } from './TimedMode'
import { IntroScreenView } from './IntroScreenView'
import { CLASSIC_MODE, TIMED_MODE } from '../actions/actionTypes'

export function Mastermind(props){

  let { gameStatus, winner, versusComputer, gameType} = props
  if (gameType === null){
    return <IntroScreenView />
  }
  if (!gameStatus){
    if (winner !== null){
      return <GameOverContainer/>
    }

    if (versusComputer === false){
      return <PlayerCreateCodeView />
    }
    
    return (
      <GameSelectContainer />
    )
  }

  
  if (gameType === TIMED_MODE){
    return <TimedMode />
  }
  if (gameType === CLASSIC_MODE){
    return <ClassicMode/>
  }

}
