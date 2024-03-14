import React from "react";
import './Link.css'

export default function GlobalLink({valueStr="", icon, customClassLink, to}) {
    return (
        <>
            <a href="/" className={customClassLink}>
                
                {icon && <span className="icon">{icon}</span>}
                {valueStr }
            </a>
        </>
    );
}