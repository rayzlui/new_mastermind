import React from 'react' 
import { CodeOptionsContainer } from '../containers/CodeOptionsContainer'
import {MoveHistoryContainer} from '../containers/MoveHistoryContainer'
import { UserBoardContainer } from '../containers/UserBoardContainer'
import {SubmitButtonContainer} from '../containers/SubmitButtonContainer'
import { TurnsRemainingContainer } from '../containers/TurnsRemainingContainer'
import { AddExtraTurnButton } from './AddExtraTurnButton'


export function ClassicMode(props){


  return (
    <div className={'classic_mode'}> 
      <TurnsRemainingContainer/>
      <MoveHistoryContainer/>
      <UserBoardContainer/>
      <CodeOptionsContainer />
      <SubmitButtonContainer/>
      <AddExtraTurnButton />
    </div>
)
  }