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
      user_id: this.props.currentUser.id,
      openNewPinModal: false,
      pin_url: '',
      pin_image_url: '',
      pin_title: "",
      pin_description: "",
      pin_board_id: -1,
      pin_user_id: this.props.currentUser.id,
      errors: []
    };
    $.embedly.defaults.key = 'c229169a1897485eb7d85ece95f1ef73';
    this.createBoard = this.props.createBoard.bind(this);
    this.createPin = this.props.createPin.bind(this);
    this.fetchBoards = this.props.fetchBoards.bind(this);
    this.handleNewBoardSubmit = this.handleNewBoardSubmit.bind(this);
    this.handleNewPinSubmit = this.handleNewPinSubmit.bind(this);
    this.scrapeImgs = this.scrapeImgs.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    $('body').css('overflow-y', 'auto');
    // Return from new board
    if (this.props.board === undefined && nextProps.board !== undefined) {
      this.props.router.push(`boards/${nextProps.pin.board.id}`);

    // Return from new board
    } else if (this.props.board !== undefined && nextProps.board !== undefined && this.props.board.id !== nextProps.board.id) {
      this.props.router.push(`boards/${nextProps.board.id}`);

    // Return from new pin.
    } else if (this.props.board !== undefined && nextProps.board !== undefined && this.props.board.id === nextProps.board.id) {

    }
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
    this.state['errors'] = [];
    console.log(this.state);
    if (this.state.pin_url === "") {
      this.state['errors'] = this.state.errors.slice().concat(['URL cannot be blank!']);
    }
    if (this.state.pin_image_url === "") {
      this.state['errors'] = this.state.errors.slice().concat(['Please select an image!']);
    }
    if (this.state.pin_title === "") {
      this.state['errors'] = this.state.errors.slice().concat(['Title cannot be blank!']);
    }
    if (this.state.pin_description === "") {
      this.state['errors'] = this.state.errors.slice().concat(['Description cannot be blank!']);
    }
    if (this.state.pin_board_id === -1) {
      this.state['errors'] = this.state.errors.slice().concat(['Please select a board to save the pin!']);
    }
    if (this.state.errors.length !== 0) {
      this.closePinModal();
      this.openPinModal();
    } else {
      this.createPin({
        pin: {
          title: this.state.pin_title,
          description: this.state.pin_description,
          user_id: this.state.user_id,
          board_id: this.state.pin_board_id,
          url: this.state.pin_url,
          image_url: this.state.pin_image_url
        }
      });
      this.closePinModal();
    }
	}

  openPinModal() {
    this.fetchBoards(this.props.currentUser.id);
    this.setState({
      openNewPinModal: true
    });
    this.thing.classList.toggle("m-fadeIn");
    this.thing2.classList.toggle("m-fadeIn");
  }

  closePinModal() {
    this.setState({
      openNewPinModal: false
    });
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

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  scrapeImgs(e) {
    e.preventDefault();
    let url = e.currentTarget.value;
    this.setState({pin_url: url});
    $.embedly.extract(url).progress(data => {
    	var images = data.images;
    	var $container = $('<div class=\'image-container\'>');
    	images.forEach( (image, idx) => {
    		var imgUrl = $.embedly.display.resize(image.url, {query: {height: 200, width: 300}});
    		var $img = $(`<img class=\'pin-upload-image-unchecked pin-upload-image${idx}\'>`);
        $img.on("click", (e2) => {
          this.setState({pin_image_url: imgUrl});
          $('.image-container').children().each(function() {
            $(this).attr('class', 'pin-upload-image-unchecked');
          });
          $img.attr('class', 'pin-upload-image-checked');
        }).bind(this);
    		$img.attr('src', imgUrl);
    		$container.append($img);
    	});

      $('.new-pin-image-area').html($container);
    });
  }

  selectBoard(e) {
    this.setState({pin_board_id: e.currentTarget.value});
    console.log(this.state);
  }

  renderErrors(){
		return(
			<ul>
				{this.state.errors.map( (error, i) => (
					<li key={`error-${i}`} className='error-prompt'>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {
    let plusUrl = 'http://res.cloudinary.com/pinitt/image/upload/c_scale,w_30/v1473185954/plus_lcbmin.png';
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
    let boardList = null;
    if ( this.props.boards !== undefined && Object.keys(this.props.boards).length !== 0) {
      boardList = Object.keys(this.props.boards).map( (boardKey, idx) => {
        return (<option key={boardKey} value={this.props.boards[boardKey].id}>{this.props.boards[boardKey].title}</option>);
      });
    }

    return (
      <section className="home-container">
        <div className='nav-bar'>
          <NavContainer />
        </div>
        <div className='home-children'>
          {comp}
        </div>
        {this.props.children}
        <div className="add-pin-button" onClick={() => {
          this.thing.classList.toggle("m-fadeIn");
          this.thing2.classList.toggle("m-fadeIn");
        }} type="button">
          <img src={plusUrl} className='plus-sign' />
        </div>
        <div className="github">
          <a target='_blank' href='https://github.com/swissashley/fullstack-pinitt'>
            <img src='http://res.cloudinary.com/pinitt/image/upload/c_scale,h_30/v1473351158/github-mark_wsyxoo.png' className='git-image' />
          </a>
        </div>
        <ul className="add-pin-menu" id="add-pin-menu-id">
          <li onClick={this.openPinModal.bind(this)}>Create a new Pin.</li>
          <li onClick={this.openBoardModal.bind(this)}>Create a new Board.</li>
          <div className="greater" id="greater-id">
            <img src={greaterUrl} className='greater-img' />
          </div>
        </ul>
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

        <Modal className='addNewBoardModal'
          isOpen={this.state.openNewPinModal}
          onRequestClose={this.closePinModal.bind(this)}
          style={newPinStyle}>
          <section className="modal-form-container">
            <form	className="modal-form-box">
              <div className="modal-form">
                <div>
    						{ this.renderErrors() }
    						</div>
                <label className='modal-label'>
                  <p className='modal-label-text'>New URL</p>
                  <input
                    type='text'
                    onChange={this.scrapeImgs}
                    defaultValue='http://'
                    className="title-input modal-input" />
                </label>
                <div className='modal-input new-pin-image-area'>
                  <img className='background-image' src='http://res.cloudinary.com/pinitt/image/upload/c_scale,w_80/v1473189417/images_ftog7y.png' />
                </div>
								<input
									type="text"
									onChange={this.update("pin_title")}
									className="title-input modal-input"
                  placeholder='Title'/>

								<textarea name='description'
									onChange={this.update("pin_description")}
									className="description-input modal-input"
                  placeholder='What is your pin about?'></textarea>
                 <select className='modal-input modal-board-select' onChange={this.selectBoard}>
                   <option disabled selected value> -- select a board -- </option>
                   {boardList}
                 </select>

                <div className="modal-save-button-box">
                  <input type="submit"
                    className="modal-save-button"
                    value='Save Pin'
                    onClick={this.handleNewPinSubmit}/>
                </div>
              </div>
            </form>
          </section>
        </Modal>
      </section>
    );
  }
}

export default withRouter(Home);
