
export function SubmitButton(props){
  const {numbersGuessed, submit, codeLength} = props

  if (numbersGuessed === codeLength){
    return (
            <button onClick={submit}>Submit Answer</button>
      
            )
  }else{
    return null
  }
}
