import React from 'react'

export function TurnsRemaining(props){
  let {turns} = props
  return (
    <div>
      <h2>Turns Remaining</h2>
      <h4>{turns}</h4>
    </div>
  )
}
