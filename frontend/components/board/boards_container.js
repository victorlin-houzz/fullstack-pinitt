import { connect } from 'react-redux';
import BoardActions from '../../actions/board_actions';
import Boards from './boards';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.session.user,
  boards: state.boards.boards,
  pins: state.pins.pins,
  pin: state.pins.pin
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: (userId) => dispatch(BoardActions.fetchBoards(userId)),
  fetchBoard: (id) => dispatch(BoardActions.fetchBoard(id)),
  updateBoard: (board) => dispatch(BoardActions.updateBoard(board)),
  deleteBoard: (id) => dispatch(BoardActions.deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);
