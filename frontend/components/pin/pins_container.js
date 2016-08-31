import { connect } from 'react-redux';
import Pins from './pins';

const mapStateToProps = state => ({
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pins);
