import React from "react";

export default props=>{
    console.log("Input props:", props);
    const {type = "text"} = props;

    return (
        <div className="input-field">
            <input {...props.input} id={props.id} type={type}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}


