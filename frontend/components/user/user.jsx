import React from 'react';
import { Link, withRouter } from 'react-router';
import BoardsContainer from '../board/boards_container';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.isOwnPage = false;
    if (this.props.currentUser.id === this.props.params.userId) {
      this.isOwnPage = true;
    }
    this.user = this.props.user;
    this.props.fetchUser(this.props.params.username);
    this.toggleFollowing = this.toggleFollowing.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.username !== undefined && nextProps.params.username !== undefined && this.props.params.username !== nextProps.params.username && nextProps.params.username !== 'boards') {
      this.props.fetchUser(nextProps.params.username);
    }
    this.user = nextProps.user;
  }

  toggleFollowing(e, followButtonClass) {
    if (followButtonClass === "unfollowed follow-button") {
      this.props.followUser(this.user.id);
    } else {
      this.props.unfollowUser(this.user.id);
    }
  }

  render() {
    let comp = null;
    if (this.props.location.pathname === `/${this.props.params.username}` || this.props.location.pathname === `/${this.props.params.username}/boards` ) {
      comp = <BoardsContainer />;
    }

    if(!this.user) {
      return (<div></div>);
    }
    let boardsUrl = `/boards`;
    let name = this.user.username.charAt(0).toUpperCase() + this.user.username.slice(1);
    let description = null;
    let followButton = null;
    let followText = "Unfollowed";
    if (this.user !== undefined && this.user.id !== this.props.currentUser.id) {
      let followButtonClass = 'unfollowed follow-button';
      for (var i = 0; i < this.user.followers.length; i++) {
        if (this.user.followers[i].id === this.props.currentUser.id) {
            followButtonClass = 'following follow-button';
            followText = "Following";
        }
      }

      followButton = (<div className={followButtonClass}
        onClick={(e) => this.toggleFollowing(e,followButtonClass)}>{followText}</div>);
    }
    if (this.user.description !== undefined) {
      description = this.user.description;
    }
    return (
      <section className="user-container">
        <div className='user-profile'>
          <p className='username'>{name}</p>
          <div className="empty"></div>
          <p className='user-description'>{description}</p>
        </div>
          <img className='profile-picture' src={this.user.image_url} />
        {followButton}
        <br/>
        <div className='summary-container'>
          <Link to={boardsUrl}>
            <ul className="text-container">
              <li className='number'>{this.props.boards.length}</li>
              <li>Boards</li>
            </ul>
          </Link>
            <ul className="text-container">
              <li className='number'>{this.user.pin_counts}</li>
              <li>Pins</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.user.followers.length}</li>
              <li>Followers</li>
            </ul>
            <ul className="text-container">
              <li className='number'>{this.user.followees.length}</li>
              <li>Following</li>
            </ul>

        </div>
        <div className='detail-container'>
          {comp}
        </div>
      </section>
    );
  }
}

export default withRouter(User);
