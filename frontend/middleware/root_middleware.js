import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import PinMiddleware from './pin_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PinMiddleware
);

export default RootMiddleware;
