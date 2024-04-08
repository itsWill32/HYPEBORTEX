import React from 'react'
import './FormRegister.css'
import GlobalInput from '../../../ui/input/Input'
import GlobalButton from '../../../ui/button/Button'
import GlobalLink from '../../../ui/link/Link'
import { FcGoogle } from "react-icons/fc";


export default function FormRegister({customClassFormR}) {
  return (
    <>
        <form id='container-formR' className={customClassFormR}>
            <GlobalInput type={'text'} withLabel={true} label={'Nombre'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-emailR'} />
            <GlobalInput type={'email'} withLabel={true} label={'Correo Electronico'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-emailR'} />
            <GlobalInput type={'password'} withLabel={true} label={'Contraseña'} placeholder={'contraseña'} custoClassInput={'input-passwordR'}  />
            <GlobalLink valueStr={'Terminos y Condiciones'} customClassLink={'forget-passwordR'} />
            <GlobalLink valueStr={'Registrate'}  customClassLink={'button-register-R'} url={'/'} />
            
            <p>o</p>

            <GlobalLink valueStr={'Continuar con'}  customClassLink={'button-google-R'} url={'/google'} icon={<FcGoogle/>} />

        </form>
    </>
  )
}
