import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'


export default function GlobalButton({content,customClassButton, icon, onClickButton}) {
  return (
    <>
        
            <button type="submit" className={customClassButton} icon={icon} onClick={onClickButton}> 
                {content}
                {icon && <span className="icon">{icon}</span>}
            </button>

    </>
  )
}


GlobalButton.propTypes = {
    content: PropTypes.string,
}

