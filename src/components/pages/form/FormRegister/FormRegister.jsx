import React from 'react'
import './FormRegister.css'
import GlobalInput from '../../../ui/input/Input';
import GlobalLink from '../../../ui/link/Link';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import axios from 'axios'


export default function FormRegister({customClassFormR}) {


  const [body, setBody] = useState({ name : '',email: '', password: '', rol : 'User' ,birthday:'00/00/00' , adress:'None' });

    const InputChangeR = ({ target }) => {
        const { name, value } = target;
        setBody({
            ...body,
            [name]: value
        });
    };

    const handleRegister = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post('http://localhost:8000/api/auth/register', body, {    
          });
          if (response.status === 200) {
              
              window.location.reload(); 
          }
      } catch (error) {
          console.error('Error:', error);
          alert("No jala")
      }
  };



  return (
    <>
        <form id='container-formR' className={customClassFormR}>
            <GlobalInput name={'name'} onChange={InputChangeR} type={'text'} withLabel={true} label={'Nombre'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-emailR'} />
            <GlobalInput name={'email'} onChange={InputChangeR} type={'email'} withLabel={true} label={'Correo Electronico'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-emailR'} />
            <GlobalInput name={'password'} onChange={InputChangeR} type={'password'} withLabel={true} label={'Contraseña'} placeholder={'contraseña'} custoClassInput={'input-passwordR'}  />
            <GlobalLink valueStr={'Terminos y Condiciones'} customClassLink={'forget-passwordR'} />
            <button className='button-register-R' onClick={handleRegister}>Registrate</button>
            
            <p>o</p>

            <GlobalLink valueStr={'Continuar con'}  customClassLink={'button-google-R'} url={'/google'} icon={<FcGoogle/>} />

        </form>
    </>
  )
}
