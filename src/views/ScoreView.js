import React from 'react'

export function ScoreView(props){
  let { score } = props 
  return (
    <>
      <h3>Score</h3>
      <p>{score}</p>
    </>
  )
}