import React from 'react'
import { CLASSIC_MODE, TIMED_MODE } from '../actions/actionTypes'
import store from '../createStore'

export function IntroScreenView(props){
    return (
      <>
        <button onClick={() => store.dispatch({type: CLASSIC_MODE})}>Classic Mode</button>
        <button onClick={() => store.dispatch({type: TIMED_MODE})}>Timed Mode</button>
      </>
    )
}