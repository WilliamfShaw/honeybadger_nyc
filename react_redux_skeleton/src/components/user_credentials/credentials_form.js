import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CredentialsForm = props => {
    const { handleSubmit, formHandler } = props;

    return (
        <form onSubmit={handleSubmit(formHandler)}>
            <Field name='email' component='input' placeholder='email' type='email'/>
            <Field name='password' component='input' placeholder='password' type='password'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default reduxForm({
    form: 'userCredentials'
})(CredentialsForm);
