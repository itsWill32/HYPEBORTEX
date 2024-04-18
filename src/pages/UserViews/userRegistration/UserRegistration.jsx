import './UserRegistration.css'
import GlobalInput from '../../../components/ui/input/Input';
import GlobalLink from '../../../components/ui/link/Link';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios from 'axios';
export default function UserRegistration() {

    const navegador = useNavigate();

    const [body, setBody] = useState({ name : '',email: '', password: '', rol : 'User' ,birthday:'00/00/00' , adress:'None',city:'',phone:'' });

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
          const response = await axios.post('http://54.162.120.128:8000/api/auth/register', body);
          const token = response.data.token;
          const id = response.data.id;
          localStorage.setItem('token', token);
          localStorage.setItem('IdUser', id);
          navegador('/home')
          let timerInterval;
          Swal.fire({
            title: "Inicio Exitoso!",
            html: "Este mensaje se cerrara en <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
      } catch (error) {
          console.error('Error:', error);
          alert("404")
      }
  };
    return (
        <div className='completeRegister'>
            <div className='container-completeRegister'>
                <div className='container-register-left'>
                <GlobalInput name={'email'} onChange={InputChangeR} type={'text'} withLabel={true} label={'Email'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />
                <GlobalInput name={'name'} type={'text'} onChange={InputChangeR} withLabel={true} label={'Nombre:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput name={'city'} onChange={InputChangeR} type={'text'} withLabel={true} label={'cuidad:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} onChange={InputChangeR} withLabel={true} label={'provincia:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />  
                </div>
                <div className='container-register-right'>
                <GlobalInput type={'password'} name={'password'} onChange={InputChangeR} withLabel={true} label={'Contrasena:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />
                <GlobalInput name={'adress'} onChange={InputChangeR} type={'text'} withLabel={true} label={'direccion(descripcion):'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput name={'phone'} onChange={InputChangeR} type={'text'} withLabel={true} label={'numero telefonico:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} onChange={InputChangeR} withLabel={true} label={'correo de cuenta paypal:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />  
                </div>
            </div>
            <div className="button-register-container">
            <GlobalLink handleLink={handleRegister} valueStr="Guardar Datos" customClassLink="button-register" url={'/home'} />
            </div>
        </div>
    );
}

