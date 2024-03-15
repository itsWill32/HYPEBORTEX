import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'


export default function GlobalButton({content,customClassButton, icon}) {
  return (
    <>
        
            <button type="submit" className={customClassButton} icon={icon} > 
                {content}
                {icon && <span className="icon">{icon}</span>}
            </button>

    </>
  )
}


GlobalButton.propTypes = {
    content: PropTypes.string,
}

