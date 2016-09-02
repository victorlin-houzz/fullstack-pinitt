import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PinMiddleware from './pin_middleware';
import BoardMiddleware from './board_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PinMiddleware,
  BoardMiddleware
);

export default RootMiddleware;
