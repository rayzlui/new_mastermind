export function checkUserGuess(userAnswer, correctAnswer, countOfEachNum) {
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
  let clone = Object.assign({}, countOfEachNum);
  let red = 0;
  let white = 0;
  for (let i = 0; i < userAnswer.length; i++) {
    let user = userAnswer[i];
    let correct = correctAnswer[i];
    if (user === correct) {
      red++;
      if (clone[user] <= 0) {
        white--;
      }
      clone[user]--;
    } else {
      if (clone[user] > 0) {
        white++;
        clone[user]--;
      }
    }
  }
  return { red: red, white: white };
}

export function handleHintGivenLogic(correct, previousGivenHints) {
  //previousGiven hints === hash, others === array

  for (let i = 0; i < correct.length; i++) {
    if (previousGivenHints[i] === undefined) {
      return [i, correct[i]];
    }
  }
}

export function preprocessSubmit(state) {
  let { correctCode, userBoard } = state;
  let userBoardValues = userBoard.board.slice();
  let { code, countOfEachNum } = correctCode;
  let checkAnswer = checkUserGuess(userBoardValues, code, countOfEachNum);
  let { red, white } = checkAnswer;
  let previousMove = {
    moves: userBoardValues,
    redPegs: red,
    whitePegs: white,
  };
  let usePhrase = Math.floor(Math.random() * 3);
  previousMove["randomPhrase"] = usePhrase;

  return { previousMove, state };
}
