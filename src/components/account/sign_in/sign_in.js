import React, {Component} from "react";
import SignInForm from "./sign_in_form";
import {connect} from "react-redux";
import {signIn} from "../../../actions";

class SignIn extends Component {
    handleSignIn = (values)=>{
        console.log("Form values:", values);
        this.props.signIn(values);
    }

    render(){
        return (
            <div>
                <h1 className="center">Sign In</h1>

                <SignInForm signIn={this.handleSignIn}/>
            </div>
        );
    }
}

export default connect(null, {
    signIn: signIn
})(SignIn);


