import { connect } from 'react-redux';
import BoardActions from '../../actions/board_actions';
import Board from './board';

const mapStateToProps = state =>
{
return ({
    currentUser: state.session.currentUser,
    user: state.user,
    board: state.boards.board,
    pins: state.pins.pins,
    pin: state.pins.pin
  });

};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (boardId) => dispatch(BoardActions.fetchBoard(boardId)),
  updateBoard: board => dispatch(BoardActions.updateBoard(board)),
  deleteBoard: id => dispatch(BoardActions.deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
