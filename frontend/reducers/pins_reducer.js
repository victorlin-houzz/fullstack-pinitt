import PinActions from '../actions/pin_actions';
import merge from 'lodash/merge';

const pins = Object.freeze({});
const pin = Object.freeze({
  title: "",
  description: "",
  image_url: "",
  user_id: "",
  board_id: "",
  errors: []
});
const PinsReducer = function(state = pins, action){
  switch(action.type){
    case PinActions.RECEIVE_ALL_PINS:
      return action.pins;

    case PinActions.RECEIVE_BOARD_PINS:
      return action.pins;

    case PinActions.RECEIVE_PIN:
      return action.pin;

    case PinActions.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, pin, {errors});
      
    default:
      return state;
  }
};

export default PinsReducer;
