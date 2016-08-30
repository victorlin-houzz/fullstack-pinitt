import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.loggingOut = this.loggingOut.bind(this);
  }

  // Wierd fix for redirect back to login in componentWillReceiveProps
  shouldComponentUpdate(nextProps) {
    if (!nextProps.currentUser) {
      return false;
    }
    return true;
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("/login");
    }
    // console.log("life");
    // console.log(this.props.currentUser);
    // console.log("-----");
  }
  loggingOut (e) {
    // console.log("logging out");
    this.props.logout();
  }

  render() {
    return (
      <section>
        <a href="/"><Img src="favicon.png" alt="logo" className="logo" id="logo" /></a>
        <h1>Nav Welcome {this.props.currentUser.username}</h1>
        <nav className="logout">
          <button className="header-button" onClick={(e) => this.loggingOut(e)}>Log Out</button>
        </nav>
      </section>
    );
  }
}

export default withRouter(Nav);
