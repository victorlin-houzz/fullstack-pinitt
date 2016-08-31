import React from 'react';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
import PinsContainer from '../pin/pins_container';
class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <NavContainer />
        <br></br>
        <PinsContainer />
      </section>
    );
  }
}

export default withRouter(Home);
