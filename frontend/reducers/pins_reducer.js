import PinActions from '../actions/pin_actions';
import merge from 'lodash/merge';

const pins = Object.freeze({});
const pin = Object.freeze({
  title: "",
  description: "",
  url: "",
  image_url: "",
  user_id: "",
  board_id: ""
});
const PinsReducer = function(state = {pins, pin, errors:[]}, action){
  switch(action.type){
    case PinActions.RECEIVE_ALL_PINS: {
      const oldPins = state.pins;
      const newPins = [...oldPins, ...action.pins];
      const newState = merge({}, state, {pins: newPins});
      return newState;
    }

    case PinActions.RECEIVE_BOARD_PINS: {
      const newState1 = {pins: action.pins};
      return newState1;
    }

    case PinActions.RECEIVE_PIN: {
      const oldPins = state.pins;
      return {pins: oldPins, pin: action.pin};
    }

    case PinActions.RECEIVE_PIN_WITH_CREATE: {
      const oldPins = state.pins;
      const newPins = [...oldPins, action.pin];
      const newState = merge({}, state, {pins: newPins, pin: action.pin});
      return newState;
    }

    case PinActions.RECEIVE_PIN_WITH_EDIT: {
      let idx = -1;
      for (var i = 0; i < state.pins.length; i++) {
        if (state.pins[i].id === action.pin.id) {
          idx = i;
        }
      }
      if (idx === -1) {
        return merge({}, state, {pin: action.pin});
      } else {
        let newPins = [...state.pins.slice(0,idx), action.pin, ...state.pins.slice(idx+1)];
        let newState = merge({}, state, {pins: newPins, pin: action.pin});
        return newState;
      }
    }

    case PinActions.RECEIVE_PIN_WITH_DELETE: {
      let idx2 = -1;
      for (var i = 0; i < state.pins.length; i++) {
        if (state.pins[i].id === action.id) {
          idx2 = i;
        }
      }
      debugger;
      if (idx2 === -1) {
        return state;
      } else {
        let newPins = [...state.pins.slice(0,idx2), ...state.pins.slice(idx2+1)];
        let newState2 = {pins: newPins, pin: {}};
        return newState2;
      }
    }

    case PinActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, pin, {pin: errors});

    default:
      return state;
  }
};

export default PinsReducer;
