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
      <section className="nav-container">
        <div className="logo-container">
          <a href="/">
            <img src="/assets/favicon.png" alt="logo" className="logo" id="logo" />
          </a>
        </div>

        <div className="search-container">
          <input className="search-bar"
            type="text"
            placeholder='Search'/>
        </div>

        <div className="profile-container">
          <button className="header-button" onClick={(e) => this.loggingOut(e)}>Log Out</button>
        </div>

      </section>
    );
  }
}

export default withRouter(Nav);
