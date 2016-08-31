import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
