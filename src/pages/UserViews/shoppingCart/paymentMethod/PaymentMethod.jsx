import React, { useState } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import { FcPlus } from 'react-icons/fc';
import './PaymentMethod.css';
import ModalPayMethod from '../../../../components/ui/modalPayMethod/ModalPayMethod'

export default function PaymentMethod() {

    const [modalOpen, setModalOpen] = useState(false); 

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
      <div className='formSummary-payMethod'>
        <h1>Cuentas de PayPal</h1>
        <div className='select-account'>
          <p>Cuenta Registrada</p>
          <GrRadialSelected size={20} />
        </div>
        <hr />
        <div className='add-account' onClick={handleOpenModal}>
          <p>Agregar cuenta</p>
          <FcPlus size={20}/>
        </div>
        <hr />
        {modalOpen && <ModalPayMethod handleCloseModal={handleCloseModal} />}
      </div>
     
  );
}