import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PinsReducer from './pins_reducer';
import BoardsReducer from './boards_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  boards: BoardsReducer,
  pins: PinsReducer
});

export default RootReducer;
