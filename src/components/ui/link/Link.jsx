import React from "react";
import './Link.css'
import { Link } from "react-router-dom";

export default function GlobalLink({valueStr="", icon, customClassLink, handle, to}) {
    return (
        <>
           
            <Link to={to} className={customClassLink} >
                {icon && <span className="icon" onClick={handle}>{icon}</span>}
                {valueStr}
            </Link>
        </>
    );
} 