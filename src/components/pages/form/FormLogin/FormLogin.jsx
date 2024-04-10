import React from 'react'
import './FormLogin.css'
import GlobalInput from '../../../ui/input/Input';
import GlobalLink from '../../../ui/link/Link';
import { FcGoogle } from "react-icons/fc";


export default function FormLogin({customClassFormL}) {
  return (
    <>
        <form id='container-form' className={customClassFormL}>
            <GlobalInput type={'email'} withLabel={true} label={'Correo Electronico'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-email'} />
            <GlobalInput type={'password'} withLabel={true} label={'Contraseña'} placeholder={'contraseña'} custoClassInput={'input-password'}  />
            <GlobalLink valueStr={'¿Haz olvidado tu contraseña?'} customClassLink={'forget-password'} />
            <GlobalLink valueStr={'Inicia sesion'}  customClassLink={'button-login'} url={'/'} />
            
            <p>o</p>

            <GlobalLink valueStr={'Continuar con'}  icon={<FcGoogle />} customClassLink={'button-google'} url={'/goggle'}  />

        </form>
    </>
  )
}
