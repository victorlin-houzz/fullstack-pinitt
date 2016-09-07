import React from 'react';
import { Link, withRouter } from 'react-router';
import PinItem from '../pin/pin_item';
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
    let pinArr = [];
    if (this.props.pins === undefined) {
      return (<div></div>);
    } else {
      pinArr = $.map(this.props.pins, (value, index) => {
        return [value];
      });
    }
    if (!this.isEmpty(this.props.pins)) {
      pins = pinArr.map((pin) => (
        <PinItem key={pin.id+pin.title} pin={pin} user={this.props.user} currentUser={this.props.currentUser} fetchPin={this.props.fetchPin} updatePin={this.props.updatePin} deletePin={this.props.deletePin} canEditPin={true}/>
      ));
    }

    return (
      <section className="pins-container">
        <div className='all-pin-container'>{pins}</div>
      </section>
    );
  }
}

export default BoardPins;
