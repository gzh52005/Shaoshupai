import React from "react";

import "./YpButton.scss"

function YpButton(props){
    
    return (
        <div>
            <button className={props.className} style={props.style} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
        </div>
    )
}

export default YpButton