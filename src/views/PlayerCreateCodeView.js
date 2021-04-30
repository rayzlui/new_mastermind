import React from 'react'
import { CodeOptionsContainer } from '../containers/CodeOptionsContainer'
import { CreateOwnCodeSubmitContainer } from '../containers/CreateOwnCodeSubmitContainer'
import { UserBoardContainer } from '../containers/UserBoardContainer'

export function PlayerCreateCodeView(props){

  return (
    <>
      <h1>Design Code</h1>
      <CodeOptionsContainer />
      <UserBoardContainer/>
      <CreateOwnCodeSubmitContainer/>
    </>
  )
}