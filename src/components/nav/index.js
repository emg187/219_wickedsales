import React, {Component} from "react";
import {Link} from "react-router-dom";
import SideNav from "./sidenav";

class Nav extends Component {
    render(){
        return (
            <div>
                <nav className="blue darken-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Wicked Sales</Link>
                    <a href="#" data-target="sidenav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>

                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <SideNav/>
        </div>
        );
    }
}

export default Nav;

