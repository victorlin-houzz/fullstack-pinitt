import { connect } from 'react-redux';
import PinActions from '../../actions/pin_actions';
import Pins from './pins';

const mapStateToProps = state => ({
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(PinActions.fetchAllPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pins);
