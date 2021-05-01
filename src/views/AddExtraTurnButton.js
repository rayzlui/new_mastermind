import React from 'react'
import { addExtraTurn } from '../actions/actions'
import store from '../createStore'



export function AddExtraTurnButton(){
  
  return (
    <button onClick={() => store.dispatch(addExtraTurn())}>Add Extra Turn?</button>
  )
}