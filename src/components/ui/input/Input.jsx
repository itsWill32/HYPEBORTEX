import React from 'react';
import './Input.css';

export default function GlobalInput({value ,label, withLabel=true, type, placeholder,custoClassInput,name,onChange}) {
  return (
    <>
        {withLabel && <label htmlFor="input" className='form-label'>{label}</label>}
        <input value={value} name={name} onChange={onChange} type={type} placeholder={placeholder} id="form-control" className={custoClassInput} />
    </>
  )
}
