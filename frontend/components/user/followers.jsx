import React from 'react';
import { Link, withRouter } from 'react-router';
import PinItem from '../pin/pin_item';
class UserPins extends React.Component {
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
    let followers = "";
    let followerArr = [];
    if (this.props.user === undefined) {
      return (<div></div>);
    } else {

      followerArr = $.map(this.props.user.followers, (value, index) => {
        return [value];
      });
    }
    if (!this.isEmpty(this.props.user.followers)) {
      followers = followerArr.map((follower) => (
        <Link key={follower.id+follower.username} to={follower.username}>
          <img className='user-picture' src={follower.image_url} />
        </Link>

      ));
    }

    return (
      <section className="followers-container">
        <div className='all-follower-container'>{followers}</div>
      </section>
    );
  }
}

export default withRouter(UserPins);
