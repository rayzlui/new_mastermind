import { CORRECT_GUESS, NEW_GAME} from "../actions/actionTypes";

export function scoreReducer(state = 0, action){
  switch (action.type){
    case CORRECT_GUESS:
      return state + 1
    case NEW_GAME:
      return 0
    default:
      return state
  }
}