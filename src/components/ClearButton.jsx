import React from 'react';

import "./ClearButton.css"

const ClearButton = (props) => {
    return (
        <div className="clear-button-container" onClick={props.handleClear}>
            {props.children}
        </div>
    );
}
 
export default ClearButton;