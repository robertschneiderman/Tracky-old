import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';

import { validateSignin, renderField } from './helpers';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password});
  }  

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-auth" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        
        <h2 className="hl-auth">Sign In</h2>

        <Field 
          name="email"
          type="text"
          label="Email"
          component={renderField} />

        <Field 
          name="password" 
          label="Password" 
          type="password" 
          component={renderField} />
        
        <button className="btn-auth" type="submit">Sign in</button>    
      </form>
    );
  }

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return {
    signinUser: payload => dispatch(actions.signinUser(payload))
  };
}

let signInForm = reduxForm({
  form: 'signin',
  validate: validateSignin  
})(Signin);

export default signInForm = connect(mapStateToProps, mapDispatchToProps)(signInForm);
