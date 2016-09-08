import React from 'react';
import { withRouter } from 'react-router';
import PinItem from '../pin/pin_item';
import Masonry from 'react-masonry-component';

class UserPins extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserPins(this.props.user.id);
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
      return (<div className="pins-container">""</div>);
    } else {
      pinArr = $.map(this.props.pins, (value, index) => {
        return [value];
      });
    }
    if (!this.isEmpty(this.props.pins)) {
      pins = pinArr.map((pin) => (
        <PinItem key={pin.id+pin.title} pin={pin} user={this.props.user} currentUser={this.props.currentUser} updatePin={this.props.updatePin} deletePin={this.props.deletePin}/>
      ));
    }

    return (
      <Masonry
        className="pins-container"
        elementType={'ul'}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false} >
        {pins}
    </Masonry>
    );
  }
}

export default withRouter(UserPins);
