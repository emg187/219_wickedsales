import React from "react";

export default props=>{
    const style = {
        "height": "20vh",
        "width": "20%",
        "marginRight": "5%", 
        "marginLeft": "7%", 
        "marginBottom": "5%"
    };

    return <img src={`/dist/${props.src}`} style={style} className="center"/>
};