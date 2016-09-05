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
    case BoardActions.RECEIVE_BOARDS: {
      const newState = {boards: action.boards};
      return newState;
    }

    case BoardActions.RECEIVE_BOARD: {
      const oldBoards = state.boards;
      const newState = {boards: oldBoards, board: action.board};
      return newState;
    }

    case BoardActions.RECEIVE_BOARD_WITH_CREATE: {
      const oldBoards = state.boards;
      const newBoards = [...oldBoards, action.board];
      // NOTE I return old state.board instead of returning new board.
      const newState = merge({}, state, {boards: newBoards, board: state.board});
      return newState;
    }

    case BoardActions.RECEIVE_BOARD_WITH_EDIT: {
      let idx = -1;
      for (var i = 0; i < state.boards.length; i++) {
        if (state.boards[i].id === action.board.id) {
          idx = i;
        }
      }
      if (idx === -1) {
        return merge({}, state, {board: action.board});
      } else {
        let newBoards = [...state.boards.slice(0,idx), action.board, ...state.boards.slice(idx+1)];
        let newState = merge({}, state, {boards: newBoards, board: action.board});
        return newState;
      }
    }

    case BoardActions.RECEIVE_BOARD_WITH_DELETE: {
      let idx2 = -1;
      for (var i = 0; i < state.boards.length; i++) {
        if (state.boards[i].id === action.id) {
          idx2 = i;
        }
      }
      if (idx2 === -1) {
        return state;
      } else {
        let newBoards = [...state.boards.slice(0,idx2), ...state.boards.slice(idx2+1)];
        let newState2 = {boards: newBoards, board: {}};
        return newState2;
      }
    }

    case BoardActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});

    default:
      return state;
  }
};



export default BoardsReducer;
