import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import PinActions from '../../actions/pin_actions';

import Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  fetchSearchPins: keyword => dispatch(PinActions.fetchSearchPins(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
