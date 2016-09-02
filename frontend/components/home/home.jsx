import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
import PinsContainer from '../pin/pins_container';
class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      openNewBoardModal: false,
      title: "",
      description: "",
      user_id: this.props.currentUser,
      openNewPinModal: false
    };
    this.createBoard = this.props.createBoard.bind(this);
    this.handleNewBoardSubmit = this.handleNewBoardSubmit.bind(this);
    this.handleNewPinSubmit = this.handleNewPinSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
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

  handleNewPinSubmit(e){
    e.preventDefault();
    // this.createPin({
    //   pin: {
    //     title: this.state.title,
    //     description: this.state.description,
    //     user_id: this.props.currentUser.id
    //   }
    // });
    this.closePinModal();
	}

  openPinModal() {
    this.fetchBoards(this.props.currentUser.id);
    this.setState({
      openNewPinModal: true
    });
    this.thing.classList.toggle("m-fadeIn");
    this.thing2.classList.toggle("m-fadeIn");
  }

  openBoardModal() {
    this.setState({
      openNewBoardModal: true
    });
    this.thing.classList.toggle("m-fadeIn");
    this.thing2.classList.toggle("m-fadeIn");
  }

  closeBoardModal() {
    this.setState({
      openNewBoardModal: false
    });
  }

  closePinModal() {
    this.setState({
      openNewPinModal: false
    });
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  render() {
    let plusUrl = 'http://res.cloudinary.com/pinitt/image/upload/v1472664493/plus_mhdary.png';
    let greaterUrl = 'http://res.cloudinary.com/pinitt/image/upload/v1472707924/greater_espxnw.png';
    let comp = null;
    if (this.props.location.pathname === "/home/" || this.props.location.pathname === "/") {
      comp = <PinsContainer />;
    }
    this.thing = document.getElementById("add-pin-menu-id");
    this.thing2 = document.getElementById("greater-id");

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

    let newPinStyle = {
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
        minHeight: '20rem',
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

    return (
      <section className="home-container">
        <NavContainer />
        {comp}
        {this.props.children}
        <div className="add-pin-button" onClick={() => {
          this.thing.classList.toggle("m-fadeIn");
          this.thing2.classList.toggle("m-fadeIn");
        }} type="button">
          <img src={plusUrl} className='plus-sign' />
        </div>
        <ul className="add-pin-menu" id="add-pin-menu-id">
          <li onClick={this.openPinModal.bind(this)}>Create a new Pin.</li>
          <li onClick={this.openBoardModal.bind(this)}>Create a new Board.</li>
        </ul>
        <div className="greater" id="greater-id">
          <img src={greaterUrl} className='greater-img' />
        </div>
        <Modal className='addNewBoardModal'
          isOpen={this.state.openNewBoardModal}
          onRequestClose={this.closeBoardModal.bind(this)}
          style={newBoardStyle}>
          <section className="modal-form-container">
  					<form	className="modal-form-box">

  						<div className="modal-form">
  							<label className='modal-label'><p className='modal-label-text'>Title</p>
  								<input
  									type="text"
  									value={this.state.username}
  									onChange={this.update("title")}
  									className="title-input modal-input"
                    placeholder='Like `Places to Go` or `Recipes to Make`.'/>
  							</label>

  							<label className='modal-label'><p className='modal-label-text'>Description</p>
  								<textarea name='description'
  									onChange={this.update("description")}
                    value={this.state.description}
  									className="description-input modal-input"
                    placeholder='What is your board about?'></textarea>
                </label>
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

        <Modal className='addNewBoardModal'
          isOpen={this.state.openNewPinModal}
          onRequestClose={this.closePinModal.bind(this)}
          style={newPinStyle}>
          <section className="modal-form-container">
            <form	className="modal-form-box">
              <h1>New Pin here!</h1>
              <div className="modal-save-button-box">
                <input type="submit"
                  className="modal-save-button"
                  value='Save Pin'
                  onClick={this.handleNewPinSubmit}/>
              </div>
            </form>
          </section>
        </Modal>
      </section>
    );
  }
}

export default withRouter(Home);
