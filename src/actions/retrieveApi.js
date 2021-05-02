import store from "../createStore";
import { loadingScreen, setCode, errorFetchingAPICode } from "./actions";

//trigger this as middleware
export async function getRandomNumbers(size, range) {
  store.dispatch(loadingScreen());
  let response = await fetch(
    `https://www.random.org/integers/?num=${size}&min=1&max=${range}&col=1&base=10&format=plain&rnd=new`
  );

  if (response.status === 200) {
    //response comes as plain text, not JSON.
    let receivedString = await response.text();
    let numArray = [];
    let countOfEachNum = {};
    for (let i = 0; i < receivedString.length; i++) {
      let currentNum = receivedString[i];
      let stringToInt = parseInt(currentNum);
      if (!isNaN(stringToInt)) {
        //avoid line breaks
        numArray.push(stringToInt);
        countOfEachNum[stringToInt] = countOfEachNum[stringToInt] + 1 || 1;
      }
    }
    store.dispatch(setCode({ code: numArray, countOfEachNum: countOfEachNum }));
  } else {
    store.dispatch(errorFetchingAPICode());
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
