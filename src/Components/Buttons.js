import React from "react";
 const Button = (props) => {
    return(
        <input type = "button" value = {props.label} onClick={props.cli}/>
    );
 }
 export default Button;