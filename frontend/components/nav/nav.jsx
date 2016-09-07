import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			searchWord: ""
		};
    this.loggingOut = this.loggingOut.bind(this);
    this.update = this.update.bind(this);
    this.currentUser = this.props.currentUser;
  }

  // Wierd fix for redirect back to login in componentWillReceiveProps
  shouldComponentUpdate(nextProps) {
    if (!nextProps.currentUser) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("/login");
    }

  }

  componentDidMount () {
    $('.search-bar').on('keyup', e => this.onKeyUp(e));
  }

  onKeyUp(e) {
    e.preventDefault();
    if (e.key !== "Enter") {
      this.setState({searchWord: e.currentTarget.value});

      // Realtime search part. If don't want that, comment out these 4 lines and comment back the rest in else statement.
      console.log(this.state.searchWord);
      this.props.fetchSearchPins(this.state.searchWord);
      this.setState({searchWord: ""});
      this.props.router.push('/search');
    } else {
      // $('.search-bar').val('');
      // console.log(this.state.searchWord);
      // this.props.fetchSearchPins(this.state.searchWord);
      // this.setState({searchWord: ""});
      // this.props.router.push('/search');
    }
  }

  loggingOut (e) {
    this.props.logout();
  }

  update(e){
		this.setState({searchWord: e.currentTarget.value});
	}

  render() {
    let userUrlPath = `/${this.currentUser.username}`;
    let user_image = 'http://res.cloudinary.com/pinitt/image/upload/v1472691007/profile-icon_tg03k3.png';
    return (
      <section className="nav-container">
        <div className="logo-container all-containers">
          <Link to="/">
            <img src="http://res.cloudinary.com/pinitt/image/upload/v1472660366/favicon_dvkjhn.png" alt="logo" className="logo" id="logo" />
          </Link>
        </div>

        <div className="search-container all-containers">
          <input className="search-bar"
            type="text"
            placeholder='Search' />
        </div>

        <div className="profile-container all-containers">
          <Link to={userUrlPath}>
            <img src={user_image} alt='profile' className='profile-link' />
          </Link>
          <button className="logout-button" onClick={(e) => this.loggingOut(e)}>Logout</button>
        </div>

      </section>
    );
  }
}

export default withRouter(Nav);
