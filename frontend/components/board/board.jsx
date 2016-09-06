import React from 'react';
import { Link, withRouter } from 'react-router';
import BoardItem from '../board/board_item';
import BoardPins from './board_pins';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.fetchBoard = this.props.fetchBoard.bind(this);
    this.updateBoard = this.props.updateBoard.bind(this);
    this.deleteBoard = this.props.deleteBoard.bind(this);
    this.state = {
      openEditBoardModal: false,
      title: "",
      description: "",
      user_id: this.props.currentUser,
      newPin: []
    };
    this.handleEditBoardSubmit = this.handleEditBoardSubmit.bind(this);
    this.handleDeleteBoardSubmit = this.handleDeleteBoardSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.board !== undefined) {
      this.setState({title: nextProps.board.title });
      this.setState({description: nextProps.board.description });
    }
    if (nextProps.pin !== undefined) {
      if (this.state.newPin.length === 0 && nextProps.pin.title !== "") {
        this.setState({newPin: this.state.newPin.concat([nextProps.pin])});
      } else if (this.state.newPin.length !== 0 && nextProps.pin.title !== "" &&
        this.state.newPin[this.state.newPin.length - 1].id !== nextProps.pin.id ) {
        this.setState({newPin: this.state.newPin.concat([nextProps.pin])});
      }
    }
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true && JSON.stringify(obj) === JSON.stringify({});
  }
  openBoardModal() {
    this.setState({
      openEditBoardModal: true
    });
  }

  closeBoardModal() {
    this.setState({
      openEditBoardModal: false
    });
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleEditBoardSubmit(e){
    e.preventDefault();
    this.updateBoard({
      board: {
        id: this.props.board.id,
        title: this.state.title,
        description: this.state.description
      }
    });
    this.closeBoardModal();
	}

  handleDeleteBoardSubmit(e){
    e.preventDefault();
    this.deleteBoard(this.props.board.id);
    this.closeBoardModal();
    this.props.router.push(`/${this.props.currentUser.username}`);
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

    let boardPins = null;
    let pinCount = 0;
    if (this.props.board !== undefined && this.props.board.pins !== undefined) {

      boardPins = <BoardPins pins={this.props.board.pins}
        user={this.props.user} currentUser={this.props.currentUser}
        fetchPin={this.props.fetchPin} updatePin={this.props.updatePin}
        deletePin={this.props.deletePin}/>;
      pinCount = Object.keys(this.props.board.pins).length;
    } else if (this.props.board !== undefined) {

    }else {
      return (<div></div>);
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
        <div className='edit-button-block'>
          <button className='edit-board-button' onClick={this.openBoardModal.bind(this)} type='button'>Edit</button>
        </div>
        <div className='boardpin-container'>
          {boardPins}
        </div>

        <Modal className='BoardModal'
          isOpen={this.state.openEditBoardModal}
          onRequestClose={this.closeBoardModal.bind(this)}
          style={newBoardStyle}>
          <section className="modal-form-container">
            <form	className="modal-form-box">

              <div className="modal-form">
                <label className='modal-label'><p className='modal-label-text'>Title</p>
                  <input
                    type="text"
                    onChange={this.update("title")}
                    value={this.state.title}
                    className="title-input modal-input" />
                </label>

                <label className='modal-label'><p className='modal-label-text'>Description</p>
                  <textarea name='description'
                    onChange={this.update("description")}
                    value={this.state.description}
                    className="description-input modal-input" ></textarea>
                </label>

                <div className="modal-save-button-box">
                  <input type="submit"
                    className="modal-save-button"
                    id="board-modal-delete-button"
                    value='Delete Board'
                    onClick={this.handleDeleteBoardSubmit}/>
                  <input type="submit"
                    className="modal-save-button"
                    id="board-modal-edit-button"
                    value='Update Board'
                    onClick={this.handleEditBoardSubmit}/>
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
