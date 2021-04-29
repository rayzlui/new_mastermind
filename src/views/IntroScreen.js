import React, {useState} from 'react'

export function IntroScreen(props){
  let {selectDifficulty, selectComputer, quickPlay} = props
  let [codeLength, lengthChange ] = useState()
  let [optionsLength, optionsChange] = useState()
  let [turnsLength, turnsChange] = useState()
  return(
    <>
      <h1>Welcome</h1>
      <h3>Select GameMode</h3>
      <button onClick={quickPlay}>Quick Play</button>
      <h3>Select Difficulty</h3>
      <label>Code Length</label>
      <input onChange={event => lengthChange(event.target.value)} type='range' class='slider' min='4' max='20' value={codeLength} id='code_length'></input>
      <input onChange={event => lengthChange(event.target.value)} type='number' value={codeLength} min='4' max='20'></input>
      <label>Number Of Options</label>
      <input onChange={event => optionsChange(event.target.value)} type='range' class='slider' min='7' max='50' value={optionsLength} id='options_length'></input>
      <input onChange={event => optionsChange(event.target.value)} type='number' value={optionsLength} min='7' max='50'></input>
      <label>Number Of Turns</label>
      <input onChange={event => turnsChange(event.target.value)} type='range' class='slider' min='4' max='20' value={turnsLength} id='turns_length'></input>
      <input onChange={event => turnsChange(event.target.value)} type='number' value={turnsLength} min='4' max='20'></input>
      <button>Start Game!</button>
    </>

  )
}