import React from 'react';
import { Link, withRouter } from 'react-router';

class Pins extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="pins-container">
        <h1>All the pins go here.</h1>
      </section>
    );
  }
}

export default withRouter(Pins);
