import React from 'react'


export function CodeOptions(props){
  let {userSelected, inputChoiceInto, gameSize} = props
  let result = []
  for (let i = 1; i <= gameSize; i++){
    result.push(
        <button onClick={userSelected !== null ? () => inputChoiceInto(userSelected, i) : null}>{i}</button>
      
    )
  }
  return <section>{result}</section>
}