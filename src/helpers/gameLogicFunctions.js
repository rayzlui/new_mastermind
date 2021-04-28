export async function getRandomNumbers(size, range){
  let response = await fetch(`https://www.random.org/integers/?num=${size}&min=1&max=${range}&col=1&base=10&format=plain&rnd=new`)

  if (response.status === 200){
    //response comes as plain text, not JSON.
    let receivedString =  response.text()
    return await receivedString
  }else{
    throw new Error(response.status)
  }

}
  

export function hiddenCodeGenerator(size, range){
    let numString = getRandomNumbers(size, range)
    //numString is string with line breaks
    let numArray = []
    let countOfEachNum = {}
    for (let i = 0; i < numString.length; i++){
      let currentNum = numString[i]
      let stringToInt = parseInt(currentNum)
      if (!isNaN(stringToInt)){
        //avoid line breaks
        numArray.push(stringToInt)
        countOfEachNum[stringToInt] = countOfEachNum[stringToInt] + 1 || 1 
      }
    }
    return {code: numArray, countOfEachNum: countOfEachNum}
}

export function altCheckUserGuess(userAnswer, correctAnswer, countOfEachNum){
  //compare which indexes have the same num
  //if not compare to reference to see if there are nums in other locations
  let redPegs = 0
  let whitePegs = 0
  let incorrectCode = {}
  let countUserGuess = {}
  for (let i = 0; i < userAnswer.length; i++){
      let user = userAnswer[i]
      let correct = correctAnswer[i]
      if (user === correct){
        redPegs++
        countUserGuess[user] = countUserGuess[user]+1 || 1
        //count pegs that were correctly guessed to avoid overcounting guessses not in right place
      }else{
        incorrectCode[user] = incorrectCode[user]+1 || 1
        
      }
  }
  for(let guess in incorrectCode){
    let alreadyCountedPegs = countUserGuess[guess] || 0
    //these are pegs that were correctly guessed
    if (alreadyCountedPegs< countOfEachNum[guess]){
      //if there are more pegs in correct code with this color
      let difference = countOfEachNum[guess] - alreadyCountedPegs
      //get difference in how much of the color is remaining in correct code
      whitePegs += Math.min(difference, incorrectCode[guess])
      //add the min between number of times user guess this color in the wrong place vs 
      //difference how many of these colors remain after removing the correct ones
    }
  }

  return {redPegs: redPegs, whitePegs: whitePegs}
}

export function CheckUserGuess(userAnswer, correctAnswer, countOfEachNum){
  /*
  [0,4,0,4,0,4] correct
  [4,4,4,4,4,4] guess
  at i === 0 
  by i == 3, count[2] === 0
  white = 2
  red = 1


  */
  //alternatively consider copying countOfEachNum, removing from it as we iterate userAnswer,
  //if we hit a perfect match and countOfEachNum < 0, we remove white and add to red
  let clone = Object.assign({}, countOfEachNum)
  let red = 0
  let white = 0
  for (let i = 0; i < userAnswer.length; i++){
  
    let user = userAnswer[i]
    let correct = correctAnswer[i]
    if (user === correct){
      red++
      if (clone[user] <= 0){
        white--
      }
      clone[user]--
    }else{
      if (clone[user]>0){
        white++
        clone[user]--
      }
    }
  }
  return {red: red, white: white}
}