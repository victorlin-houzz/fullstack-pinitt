import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
