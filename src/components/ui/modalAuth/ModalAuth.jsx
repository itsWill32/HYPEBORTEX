import React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import GlobalLink from '../link/Link';
import './ModalAuth.css';

const style = {
  width: 200,
  height: 50,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2,
  marginLeft: 130,
  marginTop: 10,
  color: 'black',
};

export default function ModalAuth({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='container-modalAuth'>
            <GlobalLink  valueStr={'Pedidos'} url={'/PurchasesMade'} customClassLink={'link-PeidosMA'} />
            <GlobalLink  valueStr={'Cerrar Sesion'} url={'/'} customClassLink={'link-LogouthMA'} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
