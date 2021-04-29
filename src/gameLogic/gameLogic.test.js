import {checkUserGuess, altCheckUserGuess} from './gameLogicFunctions'

describe('checkUserGuess', () =>{
  it('should return 3 red, 0 white', () => {
    let correctAnswer = [0,4,0,4,0,4]
    let userGuess = [4,4,4,4,4,4]
    let correctAnswerReference = {0: 3, 4:3}
    let runCheckFunction = checkUserGuess(userGuess, correctAnswer, correctAnswerReference)
    let runAltCheck = altCheckUserGuess(userGuess, correctAnswer, correctAnswerReference)
    expect(runCheckFunction.redPegs).toEqual(3)
    expect(runCheckFunction.whitePegs).toEqual(0)
    expect(runAltCheck.red).toEqual(3)
    expect(runAltCheck.white).toEqual(0)

  })
  it('should return 0 red, 0 white', () => {
    let correctAnswer = [0,0,0,0,0,0]
    let userGuess = [4,4,4,4,4,4]
    let correctAnswerReference = {0: 6}
    let runCheckFunction = checkUserGuess(userGuess, correctAnswer, correctAnswerReference)
    let runAltCheck = altCheckUserGuess(userGuess, correctAnswer, correctAnswerReference)
    expect(runCheckFunction.redPegs).toEqual(0)
    expect(runCheckFunction.whitePegs).toEqual(0)
    expect(runAltCheck.red).toEqual(0)
    expect(runAltCheck.white).toEqual(0)

  })


  it('should return 0 red, 6 white', () => {
    let correctAnswer = [1,2,3,4,5,6]
    let userGuess = [2,3,4,5,6,1]
    let correctAnswerReference = {1: 1, 2:1,3:1,4:1,5:1,6:1}
    let runCheckFunction = checkUserGuess(userGuess, correctAnswer, correctAnswerReference)
    let runAltCheck = altCheckUserGuess(userGuess, correctAnswer, correctAnswerReference)
    expect(runCheckFunction.redPegs).toEqual(0)
    expect(runCheckFunction.whitePegs).toEqual(6)
    expect(runAltCheck.red).toEqual(0)
    expect(runAltCheck.white).toEqual(6)

  })

  it('should return 6 red, 0 white', () => {
    let correctAnswer = [1,2,3,4,5,6]
    let userGuess = [1,2,3,4,5,6]
    let correctAnswerReference = {1: 1, 2:1,3:1,4:1,5:1,6:1}
    let runCheckFunction = checkUserGuess(userGuess, correctAnswer, correctAnswerReference)
    let runAltCheck = altCheckUserGuess(userGuess, correctAnswer, correctAnswerReference)
    expect(runCheckFunction.redPegs).toEqual(6)
    expect(runCheckFunction.whitePegs).toEqual(0)
    expect(runAltCheck.red).toEqual(6)
    expect(runAltCheck.white).toEqual(0)

  })
})