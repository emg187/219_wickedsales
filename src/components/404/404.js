import React from "react";
import "./404.scss";
import {Link} from "react-router-dom";

export default props=>{
    return (
        <div className="not-found">
            <div className="not-found-content center">
                <h1>404 Page Not Found</h1>
                <div>
                    <Link to="/">
                        <i className="material-icons">home</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};


