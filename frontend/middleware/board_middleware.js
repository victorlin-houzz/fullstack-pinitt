import BoardActions from '../actions/board_actions';

import { fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from '../util/board_api_util';

export default ({getState, dispatch}) => next => action => {
  const receiveBoardsOnSuccess = boards => dispatch(BoardActions.receiveBoards(boards));
  const receiveBoardOnSuccess = board => dispatch(BoardActions.receiveBoard(board));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(BoardActions.receiveErrors(errors));
  };
  switch(action.type){
    case BoardActions.FETCH_BOARDS:
      fetchBoards(action.userId, receiveBoardsOnSuccess, errorCallback);
      return next(action);

    case BoardActions.FETCH_BOARD:
      fetchBoard(action.id, receiveBoardOnSuccess, errorCallback);
      return next(action);

    case BoardActions.CREATE_BOARD:
      createBoard(action.board, receiveBoardOnSuccess, errorCallback);
      break;

    case BoardActions.UPDATE_BOARD:
      updateBoard(action.board, receiveBoardOnSuccess, errorCallback);
      break;

    case BoardActions.DELETE_BOARD:
      deleteBoard(action.id, receiveBoardOnSuccess, errorCallback);
      break;

    default:
      return next(action);

  }
};
