import './ModalPayMethod.css'
import React from 'react';
import GlobalInput from '../input/Input';
import GlobalButton from '../button/Button';
import { useState } from 'react';

export default function ModalPayMethod({ handleCloseModal }) {

  const [body, setBody] = useState({metthosdPsy : "" });

  const InputChangeR = ({ target }) => {
    const { name, value } = target;
    setBody({
        ...body,
        [name]: value
    });
};

  return (
    <div className='modal-container-PayMethod'>
      <div className='modal-content-PayMethod'>
        <span className='close' onClick={handleCloseModal}>&times;</span>
        <p>agregar nuevo metodo de pago</p>
        <div className='new-method-form'>
        <GlobalInput name={'Input-Modal-Pay'} onChange={InputChangeR} type={'email'} withLabel={true} label={'ingresa correo de paypal:'} placeholder={'correo'} custoClassInput={'input-paypal'} /> 
        </div>
        <div>
        <GlobalButton content="confirmar pago" customClassButton="button-paypal" />
        </div>
      </div>
    </div>
  );
}

