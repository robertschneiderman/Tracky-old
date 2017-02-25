import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';

import { validateSignup, renderField } from './helpers';


class Signup extends Component {

  handleFormSubmit({ email, name, password }) {
    this.props.signupUser({ email, name, password});
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-auth" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        
        <h2 className="hl-auth">Sign Up</h2>

        <Field 
          name="email"
          type="text"
          label="Email"
          component={renderField} />
      
        <Field 
          name="name" 
          type="text" 
          label="Name" 
          component={renderField} />

        <Field 
          name="password" 
          label="Password" 
          type="password" 
          component={renderField} />
        
        <button className="btn-auth" type="submit">Sign up</button>    
      </form>
    );
  }

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return {
    signupUser: payload => dispatch(actions.signupUser(payload))
  };
}

let signUpForm = reduxForm({
  form: 'signup',
  validate: validateSignup  
})(Signup);

export default signUpForm = connect(mapStateToProps, mapDispatchToProps)(signUpForm);
