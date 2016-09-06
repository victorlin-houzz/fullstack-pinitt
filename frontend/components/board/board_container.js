import { connect } from 'react-redux';
import BoardActions from '../../actions/board_actions';
import PinActions from '../../actions/pin_actions';
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
  deleteBoard: id => dispatch(BoardActions.deleteBoard(id)),
  fetchAllPins: () => dispatch(PinActions.fetchAllPins()),
  updatePin: (pin) => dispatch(PinActions.updatePin(pin)),
  deletePin: (id) => dispatch(PinActions.deletePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
