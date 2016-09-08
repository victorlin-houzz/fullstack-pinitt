import React from 'react';
import { Link, withRouter } from 'react-router';
import PinItem from './pin_item';
import Masonry from 'react-masonry-component';

class Pins extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
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
        <PinItem key={pin.id+pin.title} pin={pin} user={this.props.user} currentUser={this.props.currentUser} fetchPin={this.props.fetchPin} updatePin={this.props.updatePin} deletePin={this.props.deletePin} canEditPin={false}/>
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

export default withRouter(Pins);
