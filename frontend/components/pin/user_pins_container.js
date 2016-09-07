import { connect } from 'react-redux';
import PinActions from '../../actions/pin_actions';
import UserPins from './user_pins';

const mapStateToProps = state => {
  return (
    { currentUser: state.session.currentUser,
    user: state.session.user,
    pins: state.pins.pins,
    pin: state.pins.pin
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  fetchUserPins: (userId) => dispatch(PinActions.fetchUserPins(userId)),
  updatePin: (pin) => dispatch(PinActions.updatePin(pin)),
  deletePin: (id) => dispatch(PinActions.deletePin(id))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPins);
