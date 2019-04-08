import React, {Component} from "react";
import axios from "axios";

class Test extends Component {
    state = {
        message: "Checking auth..."
    }
    
    componentDidMount(){
        this.checkAuth();
    }

    signIn = async ()=>{
        const response = await axios.get("/api/test/sign_in.php");

        console.log("Sign in response:", response);

        this.checkAuth();
    }

    signOut = async ()=>{
        await axios.get("/api/test/sign_out.php");

        this.checkAuth();
    }

    async checkAuth(){
        const response = await axios.get("/api/test/check_auth.php");

        console.log("Check auth response:", response);

        this.setState({
            message: response.data.auth ? "You are signed in!" : "Please sign in"
        });
    }

    render(){
        return (
            <div>
                <h1 className="center">Test Stuff</h1>
                <h2 className="center">{this.state.message}</h2>
                <div className="center">
                    <button onClick={this.signIn} className="btn btn-large">Sign In</button>
                    <button onClick={this.signOut} className="btn btn-large red">Sign Out</button>
                </div>
            </div>
        );
    }
}

export default Test;

