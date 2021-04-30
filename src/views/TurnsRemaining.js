import React from 'react'

export function TurnsRemaining(props){
  let {turnsAllowed, turnsMade} = props
  return (
    <div>
      <h2>Turns Remaining</h2>
      <h4>{turnsAllowed - turnsMade}</h4>
    </div>
  )
}
