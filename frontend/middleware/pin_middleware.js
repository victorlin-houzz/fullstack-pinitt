import PinActions from '../actions/pin_actions';

import { fetchAllPins,
  fetchBoardPins,
  fetchPin,
  createPin,
  updatePin,
  deletePin } from '../util/pin_api_util';

export default ({getState, dispatch}) => next => action => {
  const receiveAllPinsOnSuccess = pins => dispatch(PinActions.receiveAllPins(pins));
  const receiveBoardPinsOnSuccess = pins => dispatch(PinActions.receiveBoardPins(pins));
  const receivePinOnSuccess = pin => dispatch(PinActions.receivePin(pin));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(PinActions.receiveErrors(errors));
  };
  switch(action.type){
    case PinActions.FETCH_ALL_PINS:
      fetchAllPins(receiveAllPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_BOARD_PINS:
      fetchBoardPins(action.boardId, receiveBoardPinsOnSuccess, errorCallback);
      return next(action);

    case PinActions.FETCH_PIN:
      fetchPin(action.id, receivePinOnSuccess, errorCallback);
      return next(action);

    case PinActions.CREATE_PIN:
      createPin(action.pin, receivePinOnSuccess, errorCallback);
      break;

    case PinActions.UPDATE_PIN:
      updatePin(action.pin, receivePinOnSuccess, errorCallback);
      break;

    case PinActions.DELETE_PIN:
      deletePin(action.id, receivePinOnSuccess, errorCallback);
      break;

    default:
      return next(action);

  }
};
