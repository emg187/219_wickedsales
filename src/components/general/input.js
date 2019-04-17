import React from "react";

export default props=>{
    console.log("Input props:", props);
    const {type = "text"} = props;

    return (
        <div className="input-field">
            <input {...props.input} id={props.id} type={type}/>
            <label htmlFor={props.id}>{props.label}</label>
            <p className="red-text">{props.meta.touched && props.meta.error}</p>
        </div>
    );
}


