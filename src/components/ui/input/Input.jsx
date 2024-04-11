import React from 'react';
import './Input.css';

export default function GlobalInput({label, withLabel=true, type, placeholder,custoClassInput,name,onChange}) {
  return (
    <>
        {withLabel && <label htmlFor="input" className='form-label'>{label}</label>}
        <input name={name} onChange={onChange} type={type} placeholder={placeholder} id="form-control" className={custoClassInput} />
    </>
  )
}
