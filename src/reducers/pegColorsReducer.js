import { VERSUS_COMPUTER, VERSUS_PLAYER } from "../actions/actionTypes";

function colorCodeGenerator(size) {
  let result = {};
  let noDupColors = {};
  for (let i = 1; i <= size; i++) {
    let nums = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    let checkStringInDups = nums.join(",");
    while (noDupColors[checkStringInDups] === true) {
      nums = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
      checkStringInDups = nums.join(",");
    }
    noDupColors[checkStringInDups] = true;
    result[i] = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
  }
  return result;
}

export function pegColorsReducers(state = null, action) {
  switch (action.type) {
    case VERSUS_COMPUTER:
    case VERSUS_PLAYER:
      return colorCodeGenerator(action.codeOptions);
    default:
      return state;
  }
}
