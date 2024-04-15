import React from 'react';
import './FormLogin.css';
import GlobalInput from '../../../ui/input/Input';
import GlobalLink from '../../../ui/link/Link';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FormLogin({ customClassFormL , handleClose}) {

    const [body, setBody] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    const InputChangeL = ({ target }) => {
        const { name, value } = target;
        setBody({
            ...body,
            [name]: value
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', body);
            const token = response.data.token;
            const rol = response.data.rolUser;
            localStorage.setItem('token', token);

            handleClose();

            console.log(rol);

            if(rol === 'Admin'){
              console.log('Admin Detected')
              navigate('/ADMIN/Home');
            }
            
            let timerInterval;


            Swal.fire({
              title: "Inicio Exitoso",
              html: "Cerrando en <b></b> milliseconds.",
              timer: 3500,
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
            handleClose();
            
            Swal.fire({
                title: "Correo u Email Incorrecto",
                text: "Intenta de nuevo",
                icon: "question"
              });
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form id='container-form' className={customClassFormL}>
                <GlobalInput name={'email'} onChange={InputChangeL} type={'email'} withLabel={true} label={'Correo Electronico'} placeholder={'ejemplo@gmail.com'} custoClassInput={'input-email'} />
                <GlobalInput name={'password'} onChange={InputChangeL} type={'password'} withLabel={true} label={'Contraseña'} placeholder={'contraseña'} custoClassInput={'input-password'} />
                <GlobalLink valueStr={'¿Haz olvidado tu contraseña?'} customClassLink={'forget-password'} />
                <button className="button-login" onClick={handleLogin}>Inicia sesión</button>
                
                <p>o</p>

                <GlobalLink valueStr={'Continuar con'}  icon={<FcGoogle />} customClassLink={'button-google'} url={'/goggle'}  />

            </form>
        </>
    );
}
