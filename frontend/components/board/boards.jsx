import React from 'react';
import { withRouter } from 'react-router';
import BoardItem from '../board/board_item';
import Modal from 'react-modal';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewBoardModal: false,
      title: "",
      description: "",
      user_id: this.props.currentUser.id,
      errors: []
    };
    this.createBoard = this.props.createBoard.bind(this);
    this.fetchBoards = this.props.fetchBoards.bind(this);
    this.handleNewBoardSubmit = this.handleNewBoardSubmit.bind(this);
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

  handleNewBoardSubmit(e){
    e.preventDefault();
    this.createBoard({
      board: {
        title: this.state.title,
        description: this.state.description,
        user_id: this.props.currentUser.id
      }
    });
    this.closeBoardModal();
  }

  openBoardModal() {
    this.setState({
      openNewBoardModal: true
    });
  }

  closeBoardModal() {
    this.setState({
      openNewBoardModal: false
    });
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }
  render() {
    let newBoardStyle = {
      overlay : {
      position        : 'fixed',
      top             : 0,
      left            : 0,
      right           : 0,
      bottom          : 0,
      backgroundColor : 'rgba(117, 117, 117, 0.75)'
      },
      content : {
        borderRadius: '4px',
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '10rem',
        width: '300px',
        maxWidth: '60rem',
        backgroundColor : 'rgba(255, 255, 255, 1)',
        boxShadow : '3px 3px 10px black',
      }
    };

    let boards = "";
    let newBoard = null;
    let plusUrl = 'http://res.cloudinary.com/pinitt/image/upload/v1472664493/plus_mhdary.png';
    if (this.props.user !== undefined && this.props.user.id === this.props.currentUser.id) {
      newBoard = (
        <section className="new-board-item" key="new-board" onClick={this.openBoardModal.bind(this)}>
          <p className='create-a-board'>Create a board</p>
          <img src={plusUrl} className='plus-sign-at-board' />
        </section>
      );
    }
    if (!this.isEmpty(this.props.boards)) {
      boards = this.props.boards.map((board) => (
        <BoardItem key={board.id+board.title} board={board} pins={board.pins} user={this.props.user} currentUser={this.props.currentUser} fetchBoard={this.props.fetchBoard} updateBoard={this.props.updateBoard} deleteBoard={this.props.deleteBoard}/>
      ));
    }


    return (
      <section className="boards-container">
        <div className='all-board-container'>
          {newBoard}
          {boards}
        </div>
          <Modal className='addNewBoardModal'
            isOpen={this.state.openNewBoardModal}
            onRequestClose={this.closeBoardModal.bind(this)}
            style={newBoardStyle}>
            <section className="modal-form-container">
    					<form	className="modal-form-box">

    						<div className="modal-form">
  								<input
  									type="text"
  									onChange={this.update("title")}
  									className="title-input modal-input"
                    placeholder='Title'/>

  								<textarea name='description'
  									onChange={this.update("description")}
  									className="description-input modal-input"
                    placeholder='What is your board about?'></textarea>

    							<div className="modal-save-button-box">
    								<input type="submit"
    									className="modal-save-button"
    									value='Save Board'
    									onClick={this.handleNewBoardSubmit}/>
    							</div>
    						</div>
    					</form>
    				</section>

          </Modal>
      </section>
    );
  }
}

export default withRouter(Boards);
