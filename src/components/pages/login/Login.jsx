import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Login.css';
import FormLogin from '../form/FormLogin/FormLogin';
import FormRegister from '../form/FormRegister/FormRegister';
import GlobalButton from '../../ui/button/Button';

const styleContentModal = {
  display: 'flex',
  width: 360,
  height: 500,
  borderRadius: 5,
  bgcolor: 'background.paper',
  p: 4,
  marginLeft: 70,
  marginTop: 5,
};

const styleModal = {
  color: 'black',
};

export default function Login({ isOpen, handleClose }) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const showLogin = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const showRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  return (
    <>
      <div>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={styleModal}
        >
          <Box sx={styleContentModal}>
            <div className='main-Login'>
              <h2>Entra en HYPEBORTEX</h2>
              <div className='container-formL'>
                <nav className='nav-modal'>
                  <GlobalButton content={'INICIA SESION'} customClassButton={'login-Button'} onClickButton={showLogin} type={'submit'} />
                </nav>
                
                {showLoginForm && <FormLogin customClassFormL={'form-Login'} handleClose={handleClose} />}

              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
