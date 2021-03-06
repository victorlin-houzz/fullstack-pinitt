import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import PinsContainer from './pin/pins_container';
import UserPinsContainer from './pin/user_pins_container';
import BoardsContainer from './board/boards_container';
import BoardContainer from './board/board_container';
import UserContainer from './user/user_container';
import FollowersContainer from './user/followers_container';
import FollowingContainer from './user/following_container';

import SessionActions from '../actions/session_actions';
import SearchPinContainer from './pin/search_pin_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ HomeContainer }
            onEnter={this._ensureLoggedIn}/>
          <Route path="/login" component={ SessionFormContainer }
            onEnter={this._redirectIfLoggedIn}/>
          <Route path="/join" component={ SessionFormContainer }
            onEnter={this._redirectIfLoggedIn}/>
          <Route path="/" component={ HomeContainer }
            onEnter={this._ensureLoggedIn}>
            <Route path="search" component={ SearchPinContainer } />
            <Route path="pins" component={PinsContainer} />
            <Route path=":username" component={ UserContainer }>
              <IndexRoute component={ BoardsContainer } />
              <Route path="boards" component={ BoardsContainer } />
              <Route path="pins" component={ UserPinsContainer } />
              <Route path="followers" component={ FollowersContainer } />
              <Route path="following" component={ FollowingContainer } />
            </Route>
            <Route path="boards/:boardId" component={ BoardContainer } />
          </Route>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
