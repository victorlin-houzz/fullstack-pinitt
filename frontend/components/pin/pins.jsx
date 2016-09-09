import React from 'react';
import { Link, withRouter } from 'react-router';
import PinItem from './pin_item';
import Masonry from 'react-masonry-component';
import _ from 'underscore';

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total_pages: 12
    };
  }

  componentDidMount() {
    this.props.fetchAllPins(this.state.page);
    // this.masonry.on('layoutComplete', this.handleLayoutComplete);
  }


  componentWillUnmount() {
    // this.masonry.off('layoutComplete', this.handleLayoutComplete);
  }
  handleLayoutComplete() {
    // console.log('complete!');
  }
  componentWillReceiveProps() {
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true && JSON.stringify(obj) === JSON.stringify({});
  }

  listenForScroll() {
    $(window).off("scroll"); // remove previous listeners
    let throttledCallback = _.throttle(this.nextPage.bind(this), 20);
    $(window).on("scroll", throttledCallback);
  }

  nextPage() {
    let view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 10) {
      if (this.state.page < this.state.total_pages) {
        this.setState({page: this.state.page + 1});
        this.props.fetchAllPins(this.state.page);
      }
    }
  }

  render() {
    let pins = "";
    if (!this.isEmpty(this.props.pins)) {
      pins = this.props.pins.map((pin) => (
        <PinItem key={pin.id+pin.title} pin={pin} user={this.props.user} currentUser={this.props.currentUser} fetchPin={this.props.fetchPin} updatePin={this.props.updatePin} deletePin={this.props.deletePin} canEditPin={false}/>
      ));
    }
    this.listenForScroll();
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
