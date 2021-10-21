import React from 'react';

import "./Button.css"

const isOp = (value) => {
    return !isNaN(value) || value === "." || value === "="
}

const Button = ( props ) => {
    return ( 
        <div className={`button-container ${
            isOp(props.children) ? null : "operator"
        }`}
        onClick={() => props.handleClick(props.children)}
        >
            <button className="button">{props.children}</button>
        </div>
     );
}
 
export default Button;