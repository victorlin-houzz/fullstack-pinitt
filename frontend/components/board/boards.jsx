import React from 'react';
import { Link, withRouter } from 'react-router';
import BoardItem from '../board/board_item';

class Boards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBoards(this.props.user.id);
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true && JSON.stringify(obj) === JSON.stringify({});
  }

  render() {
    let boards = "";
    if (!this.isEmpty(this.props.boards)) {
      boards = this.props.boards.map((board) => (
        <BoardItem board={board} pins={board.pins} user={this.props.user} currentUser={this.props.currentUser} fetchBoard={this.props.fetchBoard} updateBoard={this.props.updateBoard} deleteBoard={this.props.deleteBoard}/>
      ));
    }


    return (
      <section className="boards-container">
        <div className='all-board-container'>{boards}</div>

      </section>
    );
  }
}

export default withRouter(Boards);
