import React from 'react';
import { Link, withRouter } from 'react-router';

class Pins extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPins();
  }

  isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true && JSON.stringify(obj) === JSON.stringify({});
  }

  render() {

    let pins = "";
    if (!this.isEmpty(this.props.pins)) {
      pins = this.props.pins.map((pin) => (
        <ul key={pin.id}>
          <li key={pin.title}>{pin.title}</li>
        </ul>
      ));
    }

    return (
      <section className="pins-container">
        <h1>All the pins go here.</h1>
        {pins}
      </section>
    );
  }
}

export default withRouter(Pins);
