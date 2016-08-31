const PinActions = {
  FETCH_ALL_PINS: "FETCH_ALL_PINS",
  FETCH_BOARD_PINS: "FETCH_BOARD_PINS",
  FETCH_PIN: "FETCH_PIN",
  RECEIVE_ALL_PINS: "RECEIVE_ALL_PINS",
  RECEIVE_BOARD_PINS: "RECEIVE_BOARD_PINS",
  RECEIVE_PIN: "RECEIVE_PIN",
  CREATE_PIN: "CREATE_PIN",
  UPDATE_PIN: "UPDATE_PIN",
  DELETE_PIN: "DELETE_PIN",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

  fetchAllPins: () => ({
    type: PinActions.FETCH_ALL_PINS
  }),

  fetchBoardPins: boardId => ({
    type: PinActions.FETCH_BOARD_PINS,
    boardId
  }),

  fetchPin: id => ({
    type: PinActions.FETCH_PIN,
    id
  }),

  receiveAllPins: pins => ({
    type: PinActions.RECEIVE_ALL_PINS,
    pins
  }),

  receiveBoardPins: pins => ({
    type: PinActions.RECEIVE_BOARD_PINS,
    pins
  }),

  receivePin: pin => ({
    type: PinActions.RECEIVE_PIN,
    pin
  }),

  createPin: pin => ({
    type: PinActions.CREATE_PIN,
    pin
  }),

  updatePin: pin => ({
    type: PinActions.UPDATE_PIN,
    pin
  }),

  deletePin: id => ({
    type: PinActions.DELETE_PIN,
    id
  }),

  receiveError: errors => ({
    type: PinActions.RECEIVE_ERRORS,
    errors
  })
};
export default PinActions;
