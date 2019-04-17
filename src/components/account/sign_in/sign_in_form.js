import React from "react";
import {reduxForm, Field} from "redux-form"; 
import Input from "../../general/input";

const SignInForm = props=>{

    return (
        <form onSubmit={props.handleSubmit(props.signIn)}>
            <Field id="email" name="email" component={Input} label="Email"/>
            <Field id="password" name="password" component={Input} type="password" label="Password"/>
            <button className="btn">Sign In</button>
        </form>
    );
}

function validate(values){
    const {email, password} = values;
    const errors = {};

    if (!email){
        errors.email = "Please enter your email";
    }
    if (!password){
        errors.password = "Please enter your password";
    }

    return errors;
}


export default reduxForm({
    form: "sign-in-form", 
    validate: validate
})(SignInForm);

