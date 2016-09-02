import React from 'react';
import { Link, withRouter } from 'react-router';
import BoardItem from '../board/board_item';
import BoardPins from './board_pins';
class Boards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true && JSON.stringify(obj) === JSON.stringify({});
  }

  render() {
    let boardPins = null;
    let pinCount = 0;
    if (this.props.board !== undefined && this.props.board.title !== "") {
      boardPins = <BoardPins pins={this.props.board.pins}/>;
      pinCount = Object.keys(this.props.board.pins).length;
    }
    return (
      <section className="board-container">
        <div className='board-details'>
          <p className='title'>{this.props.board.title}</p>
          <p className='description'>{this.props.board.description}</p>
          <div className='pin-count-block'>
            <div className='pin-count'>{pinCount} Pins</div>
          </div>
        </div>

        <div className='boardpin-container'>
          {boardPins}
        </div>
      </section>
    );
  }
}

export default withRouter(Boards);
