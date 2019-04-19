import React from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "../404";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import SignOut from "./sign_out";

export default props=>{
    const {match} = props;

    return (
        <Switch>
            <Route path={`${match.path}/sign-in`} component={SignIn}/>
            <Route path={`${match.path}/sign-up`} component={SignUp}/>
            <Route path={`${match.path}/sign-out`} component={SignOut}/>
            <Route component={NotFound}/>
        </Switch>
    );
}


