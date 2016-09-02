import BoardActions from '../actions/board_actions';
import merge from 'lodash/merge';

const boards = Object.freeze({});
const board = Object.freeze({
  title: "",
  description: "",
  user_id: ""
});

const BoardsReducer = function(state = {boards, board, errors: []}, action){
  switch(action.type){
    case BoardActions.RECEIVE_BOARDS:
      return merge({}, state,{boards: action.boards});

    case BoardActions.RECEIVE_BOARD:
      return merge({}, state, {board: action.board});

    case BoardActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});

    default:
      return state;
  }
};



export default BoardsReducer;
