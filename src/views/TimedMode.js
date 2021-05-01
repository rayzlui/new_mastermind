import React from 'react' 
import { CodeOptionsContainer } from '../containers/CodeOptionsContainer'
import {MoveHistoryContainer} from '../containers/MoveHistoryContainer'
import { UserBoardContainer } from '../containers/UserBoardContainer'
import {SubmitButtonContainer} from '../containers/SubmitButtonContainer'
import { CountdownTimerContainer } from '../containers/CountdownTimerContainer'
import { ScoreContainer } from '../containers/ScoreContainer'

export function TimedMode(){

  return (
    <div className={'timed_mode'}> 
      <ScoreContainer />
      <CountdownTimerContainer/>
      <MoveHistoryContainer/>
      <UserBoardContainer/>
      <CodeOptionsContainer />
      <UserBoardContainer/>
      <SubmitButtonContainer/> 
    </div>
  )
}