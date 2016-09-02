import { connect } from 'react-redux';
import BoardActions from '../../actions/board_actions';
import Board from './board';

const mapStateToProps = state =>
{
return ({
    currentUser: state.session.currentUser,
    user: state.user,
    board: state.boards.board,
    pins: state.pins
  });

};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (boardId) => dispatch(BoardActions.fetchBoard(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
