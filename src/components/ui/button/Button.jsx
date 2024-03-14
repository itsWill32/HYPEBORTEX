import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'


export default function GlobalButton({content,customClassButton}) {
  return (
    <>
        
            <button type="submit" className={customClassButton} > 
                {content}
            </button>

    </>
  )
}


GlobalButton.propTypes = {
    content: PropTypes.string,
}

