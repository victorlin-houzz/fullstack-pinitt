import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import PinsContainer from './pin/pins_container';
import UserContainer from './user/user_container';
import SessionActions from '../actions/session_actions';

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
      replace('/home');
    }
  }

  // _requestOneUseronOnEnter (nextState, replace) {
	// 	store.dispatch(SessionActions.requestOnePokemon(nextState.params.id ,nextState.params.pokemon));
  // };

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

          <Route path="/home" component={ HomeContainer }
            onEnter={this._ensureLoggedIn}>
            <Route path="pins" component={PinsContainer} />
            <Route path="user/:userId" component={ UserContainer }>
            </Route>
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
