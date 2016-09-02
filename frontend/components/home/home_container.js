import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import BoardActions from '../../actions/board_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  boards: state.boards,
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  createBoard: board => dispatch(BoardActions.createBoard(board)),
  fetchBoards: userId => dispatch(BoardActions.fetchBoards(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
