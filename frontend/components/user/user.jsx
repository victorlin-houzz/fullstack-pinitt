import React from 'react';
import { Link, withRouter } from 'react-router';
import BoardsContainer from '../board/boards_container';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.loggingOut = this.loggingOut.bind(this);
    this.isOwnPage = false;
    if (this.props.currentUser.id === this.props.params.userId) {
      this.isOwnPage = true;
    }

    this.props.fetchUser(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.username !== nextProps.params.username) {
      this.props.fetchUser(this.props.params.username);
    }
    // this.user = nextProps.user;
    // console.log("life...");
    // console.log(nextProps.user);
    // console.log("-----");
  }

  loggingOut (e) {
    this.props.logout();
  }

  render() {
    let comp = null;
    if (this.props.location.pathname === `/${this.props.params.username}` || this.props.location.pathname === `/${this.props.params.username}/boards` ) {
      comp = <BoardsContainer />;
    }

    if(!this.props.user) {
      return (<div></div>);
    }
    let boardsUrl = `/boards`;
    let name = this.props.user.username.charAt(0).toUpperCase() + this.props.user.username.slice(1);
    return (
      <section className="user-container">
        <div className='user-profile'>
          <p className='username'>{name}</p>
          <img className='profile-picture' src={this.props.user.image_url} />
        </div>
        <div className='summary-container'>
          <Link to={boardsUrl}>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Boards</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Pins</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Likes</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Followers</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Following</li>
            </ul>
          </Link>
        </div>
        <div className='detail-container'>
          {comp}
        </div>
      </section>
    );
  }
}

export default withRouter(User);
