import React from 'react';

import "./Input.css"

const Input = (props) => {
    return ( 
        <div className="input-container">
            {props.input}
        </div>
     );
}
 
export default Input;