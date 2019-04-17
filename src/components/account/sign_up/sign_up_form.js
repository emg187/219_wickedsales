import React from "react";
import {reduxForm, Field} from "redux-form";
import Input from "../../general/input";

const SignUpForm = props=>{

    return (
        <form onSubmit={props.handleSubmit(props.signUp)}>
            <Field id="username" name="username" component={Input} label="Username"/>
            <Field id="email" name="email" component={Input} label="Email"/>
            <Field id="password" name="password" component={Input} type="password" label="Password"/>
            <Field id="confirm" name="confirm" component={Input} type="password" label="Confirm Password"/>
            <button className="btn">Sign Up</button>
        </form>
    );
}

function validate(values){
    const {username, email, password, confirm} = values;
    const errors = {};

    if (!username){
        errors.username = "Please enter a username";
    }
    if (!email){
        errors.email = "Please enter your email";
    }
    if (!password){
        errors.password = "Please enter your password";
    }
    if (password !== confirm){
        errors.confirm = "Please confirm the same password";
    }

    return errors;
}


export default reduxForm({
    form: "sign-up-form", 
    validate: validate
})(SignUpForm);

