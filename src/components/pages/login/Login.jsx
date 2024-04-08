import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Login.css';
import FormLogin from '../form/FormLogin/FormLogin';

const styleContentModal = {
  display: 'flex',
  width: 360,
  height: 420,
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
                <h4>INICIA SESION</h4>
                <FormLogin customClassFormL={'form-Login'} />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
