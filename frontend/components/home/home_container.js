import { connect } from 'react-redux';
import SessionActions from '../../actions/session_actions';
import BoardActions from '../../actions/board_actions';
import PinActions from '../../actions/pin_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  boards: state.boards.boards,
  board: state.boards.board,
  pins: state.pins.pins,
  pin: state.pins.pin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  createBoard: board => dispatch(BoardActions.createBoard(board)),
  createPin: pin => dispatch(PinActions.createPin(pin)),
  fetchBoards: userId => dispatch(BoardActions.fetchBoards(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
