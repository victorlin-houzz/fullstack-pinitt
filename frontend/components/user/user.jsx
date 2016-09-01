import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.loggingOut = this.loggingOut.bind(this);
    this.isOwnPage = false;
    if (this.props.currentUser.id === this.props.params.userId) {
      this.isOwnPage = true;
    }

    this.props.fetchUser(this.props.params.userId);
    console.log("fetching new user...");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchUser(this.props.params.userId);
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
    if(!this.props.user) {
      return (<div></div>);
    }
    let boardsUrl = `/boards`;
    return (
      <section className="user-container">
        <h1>{this.props.user.username}</h1>
        <img src={this.props.user.image_url} />
        <Link to={boardsUrl}>
          <ul className="board-text-container">
            <li>{this.props.boards.length}</li>
            <li>Board</li>
          </ul>
        </Link>

        <button className="logout-button"
          onClick={(e) => this.loggingOut(e)}>Logout</button>
      </section>
    );
  }
}

export default withRouter(User);
