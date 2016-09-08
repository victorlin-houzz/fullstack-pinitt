import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.user = this.props.user;
    this.props.fetchUser(this.props.params.username);
    this.toggleFollowing = this.toggleFollowing.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.username !== undefined && nextProps.params.username !== undefined && this.props.params.username !== nextProps.params.username && nextProps.params.username !== 'boards') {
      this.props.fetchUser(nextProps.params.username);
    }
    this.user = nextProps.user;
    $('.summary').children().children().each((idx, ul) => {

      if (nextProps.location.pathname === `/${nextProps.params.username}` || nextProps.location.pathname === `/${nextProps.params.username}/boards` ) {
        if (idx === 0) {
          $(ul).attr('class', 'text-container checked');
        } else {
          $(ul).attr('class', 'text-container unchecked');
        }
      } else if (nextProps.location.pathname === `/${nextProps.params.username}/pins` ) {
        if (idx === 1) {
          $(ul).attr('class', 'text-container checked');
        } else {
          $(ul).attr('class', 'text-container unchecked');
        }
      } else if (nextProps.location.pathname === `/${nextProps.params.username}/followers` ) {
        if (idx === 2) {
          $(ul).attr('class', 'text-container checked');
        } else {
          $(ul).attr('class', 'text-container unchecked');
        }
      } else if (nextProps.location.pathname === `/${nextProps.params.username}/following` ) {
        if (idx === 3) {
          $(ul).attr('class', 'text-container checked');
        } else {
          $(ul).attr('class', 'text-container unchecked');
        }
      }
      $(ul).on("click", (e2) => {
        $('.summary').children().children().each((idx2, ul2) => {
          $(ul2).attr('class', 'text-container unchecked');
        }).bind(this);
        $(ul).attr('class', 'text-container checked');
      }).bind(this);
    });
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
    // if (this.props.location.pathname === `/${this.props.params.username}` || this.props.location.pathname === `/${this.props.params.username}/boards` ) {
    //   comp = <BoardsContainer />;
    // } else if (this.props.location.pathname === `/${this.props.params.username}/pins` ) {
    //   comp = <UserPinsContainer />;
    // } else if (this.props.location.pathname === `/${this.props.params.username}/followers` ) {
    //   comp = <FollowersContainer />;
    // } else if (this.props.location.pathname === `/${this.props.params.username}/following` ) {
    //   comp = <FollowingContainer />;
    // }

    if(!this.user) {
      return (<div></div>);
    }
    let boardsUrl = `${this.user.username}/boards`;
    let pinsUrl = `${this.user.username}/pins`;
    let followersUrl = `${this.user.username}/followers`;
    let followingUrl = `${this.user.username}/following`;
    let description = null;
    let followButton = null;
    let name = this.props.currentUser.username.charAt(0).toUpperCase() + this.props.currentUser.username.slice(1);
    let followText = "Unfollowed";
    if (this.user !== undefined && this.user.id !== undefined && this.user.id !== this.props.currentUser.id) {
      let followButtonClass = 'unfollowed follow-button';
      name = this.user.username.charAt(0).toUpperCase() + this.user.username.slice(1);
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
          <div className='summary'>
            <Link to={boardsUrl}>
              <ul className="text-container checked">
                <li className='number'>{this.props.boards.length}</li>
                <li>Boards</li>
              </ul>
            </Link>
            <Link to={pinsUrl}>
              <ul className="text-container unchecked">
                <li className='number'>{this.user.pins.length}</li>
                <li>Pins</li>
              </ul>
            </Link>
            <Link to={followersUrl}>
              <ul className="text-container unchecked">
                <li className='number'>{this.user.followers.length}</li>
                <li>Followers</li>
              </ul>
            </Link>
            <Link to={followingUrl}>
              <ul className="text-container unchecked">
                <li className='number'>{this.user.followees.length}</li>
                <li>Following</li>
              </ul>
            </Link>
          </div>
        </div>
        <br/>
        <div className='detail-container'>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default withRouter(User);
