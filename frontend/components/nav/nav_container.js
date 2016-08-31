import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
