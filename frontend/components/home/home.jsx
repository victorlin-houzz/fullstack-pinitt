import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.props = this.props;
    return (
      <section>
        <a href="/"><Img src="favicon.png" alt="logo" className="logo" id="logo" /></a>
        <nav className="logout">
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </nav>
      </section>
    );
  }
}

export default Home;
