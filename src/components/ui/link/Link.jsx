import { Link } from "react-router-dom";

import './Link.css'

export default function GlobalLink({ valueStr = "", icon, customClassLink, handle, url, handleLink }) {
    

    return (
        <Link to={url} className={customClassLink} onClick={handleLink}>
            {icon && <span className="icon" onClick={handle}>{icon}</span>}
            {valueStr}
        </Link>
    );
}
