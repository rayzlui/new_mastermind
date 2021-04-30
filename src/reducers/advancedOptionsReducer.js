import { ADD_USER_MOVE, VERSUS_COMPUTER, VERSUS_PLAYER} from "../actions/actionTypes";

const intialState = {
  computer: null,
  codeLength: null,
  codeOptions: null,
  turns: null,
  timeAllowed: null,
}

export function advancedOptionsReducer(state = intialState,action){
    switch(action.type){
      case VERSUS_COMPUTER:
        return Object.assign({},state,{computer: true, codeLength: action.codeLength, codeOptions:action.codeOptions, turns: action.turns, timeAllowed: action.timeAllowed})
        case VERSUS_PLAYER: 
        return Object.assign({}, state, {computer:false,codeLength: action.codeLength, codeOptions:action.codeOptions, turns: action.turns, timeAllowed: action.timeAllowed})
         case ADD_USER_MOVE:
      let turns = state.turns - 1
      return Object.assign({}, state, {turns: turns})
    default:
      return state
    }

}