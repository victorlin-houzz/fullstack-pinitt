import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import User from './user';

const mapStateToProps = state => {
  return {
  currentUser: state.session.currentUser,
  user: state.session.user,
  boards: state.boards,
  pins: state.pins
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  fetchUser: (username) => dispatch(SessionActions.fetchUser(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
