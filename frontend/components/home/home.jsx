import React from 'react';
import { Link, withRouter } from 'react-router';
import NavContainer from '../nav/nav_container';
import PinsContainer from '../pin/pins_container';
class Home extends React.Component {
  constructor (props) {
    super(props);

  }
  render() {
    let plusUrl = 'http://res.cloudinary.com/swissashley/image/upload/v1472664493/plus_mhdary.png';
    let greaterUrl = 'http://res.cloudinary.com/swissashley/image/upload/v1472707924/greater_espxnw.png';
    let comp = null;
    if (this.props.location.pathname === "/home/" || this.props.location.pathname === "/") {
      comp = <PinsContainer />;
    }
    let thing = document.getElementById("add-pin-menu-id");
    let thing2 = document.getElementById("greater-id");

    return (
      <section className="home-container">
        <NavContainer />
        {comp}
        {this.props.children}
        <div className="add-pin-button" onClick={() => {
            thing.classList.toggle("m-fadeIn");
            thing2.classList.toggle("m-fadeIn");
          }} type="button">
          <img src={plusUrl} className='plus-sign' />
        </div>
        <ul className="add-pin-menu" id="add-pin-menu-id">
          <li><a href="#">Create a new Pin.</a></li>
          <li><a href="#">Create a new Board.</a></li>
        </ul>
        <div className="greater" id="greater-id">
          <img src={greaterUrl} className='greater-img' />
        </div>
      </section>
    );
  }
}

export default withRouter(Home);
