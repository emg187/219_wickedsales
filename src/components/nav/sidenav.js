import React, {Component} from "react";
import {Link} from "react-router-dom";

class SideNav extends Component{

    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

    render(){
        return (
            <ul ref={(element)=>{this.sidenav=element}} id="sidenav" className="sidenav">
                {this.props.links}
            </ul>
        );
    }
}

export default SideNav;
