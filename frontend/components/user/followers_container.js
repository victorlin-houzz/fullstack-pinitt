import { connect } from 'react-redux';
import PinActions from '../../actions/pin_actions';
import Followers from './followers';

const mapStateToProps = state => {
  return (
    { currentUser: state.session.currentUser,
    user: state.session.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
