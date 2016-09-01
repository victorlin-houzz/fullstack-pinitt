import React from 'react';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
import PinsContainer from '../pin/pins_container';
class Home extends React.Component {
  constructor (props) {
    super(props);

  }
  render() {
    let comp = null;
    if (this.props.location.pathname === "/home/") {
      comp = <PinsContainer />;
    }
    
    return (
      <section className="home-container">
        <NavContainer />
        {comp}
        {this.props.children}

        <button className="add-pin-button" onClick={() => console.log("Add!")} type="button">
          <em className='plus-sign'></em>
          <span className='accessibilityText'>Save Pin</span>
        </button>
      </section>
    );
  }
}

export default withRouter(Home);
