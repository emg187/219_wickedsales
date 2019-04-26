import React from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "../404";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import SignOut from "./sign_out";
import Orders from "./orders";
import Profile from "./profile";
import auth from "../../hoc/auth";

export default props=>{
    const {match} = props;

    return (
        <Switch>
            <Route path={`${match.path}/sign-in`} component={auth(SignIn, "/account/orders", false)}/>
            <Route path={`${match.path}/sign-up`} component={auth(SignUp, "/products", false)}/>
            <Route path={`${match.path}/sign-out`} component={auth(SignOut, "/")}/>
            <Route path={`${match.path}/orders`} component={auth(Orders)}/>
            <Route path={`${match.path}/profile`} component={auth(Profile)}/>
            <Route component={NotFound}/>
        </Switch>
    );
}


