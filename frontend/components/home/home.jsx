import React from 'react';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
class Home extends React.Component {
  render() {
    return (
      <section>
        <NavContainer />

      </section>
    );
  }
}

export default withRouter(Home);
