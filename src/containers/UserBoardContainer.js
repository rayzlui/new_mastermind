import {connect} from 'react-redux'
import { selectInputSpot } from '../actions/actions'
import { UserBoard } from '../views/UserBoard'

function mapStateToProps(state){
  return {
    userBoard: state.userBoard.board,

  }
}


function mapDispatchToProps(dispatch){
  return{
    changeInputSpot: (index) => dispatch(selectInputSpot(index))
  }
}

export const UserBoardContainer = connect(mapStateToProps, mapDispatchToProps)(UserBoard)