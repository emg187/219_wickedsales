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


export default reduxForm({
    form: "sign-in-form"
})(SignInForm);

