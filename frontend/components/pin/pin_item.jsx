import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class PinItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditPinModal: false,
      openPinDetailModal: false,
      title: "",
      description: "",
      url: "",
      user_id: this.props.pin.user.id,
      board_id: -1,
      image_url: ""
    };
    this.updatePin = this.props.updatePin.bind(this);
    this.deletePin = this.props.deletePin.bind(this);
    this.handleEditPinSubmit = this.handleEditPinSubmit.bind(this);
    this.handleDeletePinSubmit = this.handleDeletePinSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({title: nextProps.pin.title });
    this.setState({description: nextProps.pin.description });
    this.setState({url: nextProps.pin.url });
    this.setState({board_id: nextProps.pin.board_id });
    this.setState({image_url: nextProps.pin.image_url });
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true && JSON.stringify(obj) === JSON.stringify({});
  }

  openPinModal() {
    this.setState({
      openEditPinModal: true,
      title: this.props.pin.title,
      description: this.props.pin.description
    });
  }

  closePinModal() {
    this.setState({
      openEditPinModal: false
    });
  }

  openPinDetailModal() {
    this.setState({
      openPinDetailModal: true
    });
    $('body').css('overflow-y', 'hidden');
  }

  closePinDetailModal() {
    this.setState({
      openPinDetailModal: false
    });
    $('body').css('overflow-y', 'auto');
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleEditPinSubmit(e){
    e.preventDefault();
    this.updatePin({
      pin: {
        id: this.props.pin.id,
        title: this.state.title,
        description: this.state.description
      }
    });
    this.closePinModal();
	}

  handleDeletePinSubmit(e){
    e.preventDefault();
    this.deletePin(this.props.pin.id);
    this.closePinModal();
  }

  render() {
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

    let detailPinStyle = {
      overlay : {
      position        : 'fixed',
      top             : 0,
      left            : 0,
      right           : 0,
      bottom          : 0,
      backgroundColor : 'rgba(255,255,255, 0.85)'
      },
      content : {
        borderRadius: '4px',
        bottom: 'auto',
        maxHeight: '90%',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '10rem',
        width: '600px',
        maxWidth: '60%',
        backgroundColor : 'rgba(255, 255, 255, 1)',
        boxShadow : '3px 3px 10px black',
      }
    };
    let pinShortUrl = null;
    if (this.props.pin !== undefined) {
      pinShortUrl = this.props.pin.url.replace("http://", "").replace("https://", "").replace("www.", "").split("/")[0];
    }
    let editButton = null;
    if (this.props.canEditPin === true && this.props.pin.user.id === this.props.currentUser.id) {
      editButton = (<img className='edit-board-button' src='http://res.cloudinary.com/pinitt/image/upload/c_scale,w_50/v1473185168/pencil_x13czz.png' onClick={this.openPinModal.bind(this)} />);
    }
    return (
      <li className="pin-item-container" key={this.props.pin.id+this.props.pin.title}>
        <div className='picture-block' onClick={this.openPinDetailModal.bind(this)}>
          <img className='pin-picture' src={this.props.pin.image_url} />
        </div>
        <div className='detail-block'>
          <div className='pin-title'>
            {this.props.pin.title}
          </div>

          <Link to={this.props.pin.user.username}>
            <img className="profile-pic" src={this.props.pin.user.image_url} />
          </Link>

          <div className="url-block">
            <p className='board-title'>{this.props.pin.board.title}</p>
            <a className='pin-url' href={this.props.pin.url} target="_blank">
              {pinShortUrl}
            </a>
          </div>

          {editButton}
        </div>

        <Modal className='PinModal'
          isOpen={this.state.openEditPinModal}
          onRequestClose={this.closePinModal.bind(this)}
          style={newPinStyle}>
          <section className="modal-form-container">
            <form	className="modal-form-box">

              <div className="modal-form">
                <label className='modal-label'>
                  <p className='modal-label-text'>Title</p>
                  <input
                    type="text"
                    onChange={this.update("title")}
                    defaultValue={this.props.pin.title}
                    className="title-input modal-input" />
                </label>

                <label className='modal-label'><p className='modal-label-text'>Description</p>
                  <textarea name='description'
                    onChange={this.update("description")}
                    defaultValue={this.props.pin.description}
                    className="description-input modal-input" ></textarea>
                </label>

                <div className="modal-save-button-box">
                  <input type="submit"
                    className="modal-save-button"
                    id="board-modal-delete-button"
                    value='Delete Pin'
                    onClick={this.handleDeletePinSubmit}/>
                  <input type="submit"
                    className="modal-save-button"
                    id="board-modal-edit-button"
                    value='Update Pin'
                    onClick={this.handleEditPinSubmit}/>
                </div>
              </div>
            </form>
          </section>

        </Modal>

        <Modal className='PinModal'
          isOpen={this.state.openPinDetailModal}
          onRequestClose={this.closePinDetailModal.bind(this)}
          style={detailPinStyle}>
          <div className="pin-detail-block">
            <a className='pin-url' href={this.props.pin.url} target="_blank">
              <div className='picture-block'>
                <img className='pin-picture' src={this.props.pin.image_url} />
              </div>
            </a>
            <div className='detail-block'>
              <div className='pin-title'>
                {this.props.pin.title}
              </div>
              <div className='pin-description'>
                {this.props.pin.description}
              </div>
              <Link to={this.props.pin.user.username}>
                <img className="profile-pic" src={this.props.pin.user.image_url} />
              </Link>

              <div className="url-block">
                <p className='board-title'>{this.props.pin.board.title}</p>
                <a className='pin-url' href={this.props.pin.url} target="_blank">
                  {pinShortUrl}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </li>
    );
  }
}

export default withRouter(PinItem);
