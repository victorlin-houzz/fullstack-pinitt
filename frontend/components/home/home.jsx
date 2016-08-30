import React from 'react';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
class Home extends React.Component {
  render() {
    return (
      <section>
        <h1>Home</h1>
        <NavContainer />

      </section>
    );
  }
}

export default withRouter(Home);
