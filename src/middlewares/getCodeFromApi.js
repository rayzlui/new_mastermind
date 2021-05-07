import { getRandomNumbers } from "../actions/retrieveApi";
import { VERSUS_COMPUTER } from "../actions/actionTypes";

export function triggerAPICall() {
  return function wrap(next) {
    return async function handleAction(action) {
      let { type, codeLength, codeOptions } = action;
      switch (type) {
        case VERSUS_COMPUTER:
          getRandomNumbers(codeLength, codeOptions);
          break;
        default:
          break;
      }

      return next(action);
    };
  };
}
