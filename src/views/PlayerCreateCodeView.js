import React from 'react'
import { CodeOptionsContainer } from '../containers/CodeOptionsContainer'
import { UserBoardContainer } from '../containers/UserBoardContainer'

export function PlayerCreateCodeView(props){

  const {submitOwnCode} = props
  return (
    <>
      <h1>Design Code</h1>
      <CodeOptionsContainer />
      <UserBoardContainer/>
      <button onClick={submitOwnCode}>Submit</button>
    </>
  )
}