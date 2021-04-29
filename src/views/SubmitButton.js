
export function SubmitButton(props){
  const {numbersGuessed, runCheckCode, codeLength, triggerApi} = props

  if (numbersGuessed === codeLength){
    return (
            <button onClick={(board) => runCheckCode()}>Submit Answer</button>
      
            )
  }else{
    return null
  }
}
