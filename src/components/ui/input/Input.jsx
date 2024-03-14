import React from 'react';
import './Input.css';

export default function GlobalInput({label, withLabel=true, type, placeholder}) {
  return (
    <>
        {withLabel && <label htmlFor="input" className='form-label'>{label}</label>}
        <input type={type} placeholder={placeholder} className="form-control" />
          
    </>
  )
}
