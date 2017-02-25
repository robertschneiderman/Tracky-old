import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className="c-fieldset-auth">
            <label className="label-auth">{label}</label>
            <div>
                <input className="input-auth" {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className="text-auth-error">{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>        
    );
};

export const validateSignup = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters';
    }
    return errors;
};

export const validateSignin = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be at least 6 characters';
    }
    return errors;
};