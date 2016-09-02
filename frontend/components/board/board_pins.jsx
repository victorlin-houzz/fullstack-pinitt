import React from 'react';
import { Link, withRouter } from 'react-router';

class BoardPins extends React.Component {
  constructor(props) {
    super(props);
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
      pins = Object.keys(this.props.pins).map((pinKey) => (
        <ul key={this.props.pins[pinKey].id}>
          <li key={this.props.pins[pinKey].title}>{this.props.pins[pinKey].title}</li>
        </ul>
      ));
    }
    return (
      <section className="pins-container">
        <h1>All the boardpins go here.</h1>
        {pins}
      </section>
    );
  }
}

export default BoardPins;
