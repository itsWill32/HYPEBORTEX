import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './Register.css'
import FormRegister from '../form/FormRegister/FormRegister'

const styleContentModal = {
  display: 'flex',
  width: 360,
  height: 450, 
  borderRadius: 5,
  bgcolor: 'background.paper',
  p: 4,
  marginLeft: 70,
  marginTop: 5,
};

const styleModal = {
  color: 'black'
}

export default function Register() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div >
        <Button onClick={handleOpen}>Registrate</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styleModal}
        >
          <Box sx={styleContentModal}>
            <div className='main-Login'>
              <h2>Entra en HYPEBORTEX</h2>
              <div className='container-formL'>
                <h4>Registrate</h4>
                <FormRegister customClassFormL={'form-Login'} />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}