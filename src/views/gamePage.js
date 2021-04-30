import React from 'react'
import { CodeOptionsContainer } from '../containers/CodeOptionsContainer'
import {MoveHistoryContainer} from '../containers/MoveHistoryContainer'
import { UserBoardContainer } from '../containers/UserBoardContainer'
import {SubmitButtonContainer} from '../containers/SubmitButtonContainer'
import { TurnsRemainingContainer } from '../containers/TurnsRemainingContainer'
import { IntroScreenContainer } from '../containers/IntroScreenContainer'
import { PlayerCreateCodeView } from './PlayerCreateCodeView'
import { CountdownTimerContainer } from '../containers/CountdownTimerContainer'

export function Mastermind(props){

  let { gameStatus, winner, versusComputer} = props
  if (!gameStatus){
    if (winner){
      return <h1>You win!</h1>
    }
    if (winner === false){
      return <h1>You lose :(</h1>
    }

    if (versusComputer === false){
      return <PlayerCreateCodeView />
    }
    return (
      <IntroScreenContainer />
    )
  }

  
  return (
    <div className={'container'}> 
      <h1>Mastermind</h1> 
      <CountdownTimerContainer/>
      <TurnsRemainingContainer/>
      <MoveHistoryContainer/>
      <CodeOptionsContainer />
      <UserBoardContainer/>
      <SubmitButtonContainer/>
    </div>
  )
}
