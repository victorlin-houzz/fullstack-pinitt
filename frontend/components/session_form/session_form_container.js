import { connect } from 'react-redux';
import SessionForm from './session_form';
import SessionActions from '../../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? SessionActions.login : SessionActions.signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
