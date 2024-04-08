import { Link } from "react-router-dom";

import './Link.css'

export default function GlobalLink({ valueStr = "", icon, customClassLink, handle, url, style }) {
    

    return (
        <Link to={url} className={customClassLink}>
            {icon && <span className="icon" onClick={handle}>{icon}</span>}
            {valueStr}
            
        </Link>
    );
}
