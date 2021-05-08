import store from "../createStore";
import { setCode } from "./actions";

//trigger this as middleware
export async function getRandomNumbers(size, range) {
  let response = await fetch(
    `https://www.random.org/integers/?num=${size}&min=1&max=${range}&col=1&base=10&format=plain&rnd=new`
  );

  if (response.status === 200) {
    //response comes as plain text, not JSON.
    console.log("Code successfully retreieved");
    let receivedString = await response.text();
    let numArray = [];
    let countOfEachNum = {};
    let currentNum = "";
    for (let i = 0; i < receivedString.length; i++) {
      let currentChar = receivedString[i];
      if (!isNaN(parseInt(currentChar))) {
        currentNum += currentChar;
      } else {
        let stringToInt = parseInt(currentNum);
        numArray.push(stringToInt);
        countOfEachNum[stringToInt] = countOfEachNum[stringToInt] + 1 || 1;
        currentNum = "";
      }
    }
    store.dispatch(setCode({ code: numArray, countOfEachNum: countOfEachNum }));
  } else {
    console.log("Unable to retrieve code, generating with Javascript Random");
    let newCode = [];
    let countNums = {};
    for (let i = 0; i < size; i++) {
      let randNum = Math.floor(Math.random() * range);
      newCode.push(randNum);
      countNums[randNum] = countNums[randNum] || 1;
    }
    store.dispatch(setCode({ code: newCode, countOfEachNum: countNums }));
    throw new Error(response.status);
  }
}
