import BoardActions from '../actions/board_actions';
import merge from 'lodash/merge';

const boards = Object.freeze({});
const board = Object.freeze({
  title: "",
  description: "",
  user_id: "",
  errors: []
});

const BoardsReducer = function(state = boards, action){
  switch(action.type){
    case BoardActions.RECEIVE_BOARDS:
      return action.boards;
      
    case BoardActions.RECEIVE_BOARD:
      return action.board;

    case BoardActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, board, {errors});

    default:
      return state;
  }
};



export default BoardsReducer;
