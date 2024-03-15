import React from "react";
import './Link.css'

export default function GlobalLink({valueStr="", icon, customClassLink, handle}) {
    return (
        <>
            <a href="/" className={customClassLink} >
                
                {icon && <span className="icon" onClick={handle}>{icon}</span>}
                {valueStr }
            </a>
        </>
    );
} 