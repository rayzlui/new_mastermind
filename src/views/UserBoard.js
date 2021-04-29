import React from 'react'

export function  UserBoard(props){
  let result = []
  let {userBoard, changeInputSpot} = props
  for (let i = 0; i < userBoard.length; i++){
    result.push(
      <div>
        <button onClick={() => changeInputSpot(i)}>{userBoard[i] || 'fill'}</button>
      </div>
    )
  }
  return result
}