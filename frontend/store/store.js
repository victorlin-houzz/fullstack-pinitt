import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = (preloadedState = {benches: []}) => (
  createStore(
    RootReducer,
    preloadedState,
    MasterMiddleware
  )
);

export default configureStore;
