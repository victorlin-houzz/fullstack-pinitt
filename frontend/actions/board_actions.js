const BoardActions = {
  FETCH_BOARDS: "FETCH_BOARDS",
  FETCH_BOARD: "FETCH_BOARD",
  RECEIVE_BOARDS: "RECEIVE_BOARDS",
  RECEIVE_BOARD: "RECEIVE_BOARD",
  CREATE_BOARD: "CREATE_BOARD",
  UPDATE_BOARD: "UPDATE_BOARD",
  DELETE_BOARD: "DELETE_BOARD",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

  fetchBoards: () => ({
    type: BoardActions.FETCH_BOARDS
  }),

  fetchBoard: id => ({
    type: BoardActions.FETCH_BOARD,
    id
  }),

  receiveBoards: boards => ({
    type: BoardActions.RECEIVE_BOARDS,
    boards
  }),

  receiveBoard: board => ({
    type: BoardActions.RECEIVE_BOARD,
    board
  }),

  createBoard: board => ({
    type: BoardActions.CREATE_BOARD,
    board
  }),

  updateBoard: board => ({
    type: BoardActions.UPDATE_BOARD,
    board
  }),

  deleteBoard: id => ({
    type: BoardActions.DELETE_BOARD,
    id
  }),

  receiveErrors: errors => ({
    type: BoardActions.RECEIVE_ERRORS,
    errors
  })
};
export default BoardActions;
