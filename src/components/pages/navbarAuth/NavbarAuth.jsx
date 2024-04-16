import React, { useState } from 'react';
import '../navbar/Nabvar';
import GlobalInput from '../../ui/input/Input';
import GlobalLink from '../../ui/link/Link';
import { FaUser } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import ModalAuth from '../../ui/modalAuth/ModalAuth'; // Importa el componente de modal aquí

export default function NabvarAuth() {
  const [modalOpen, setModalOpen] = useState(false); // Agrega un estado para controlar la apertura/cierre de la modal

  const handleModalOpen = () => {
    setModalOpen(true); // Función para abrir la modal
  };

  const handleModalClose = () => {
    setModalOpen(false); // Función para cerrar la modal
  };

  return (
    <>
      <div className='main-header'>
        <GlobalInput name={'Search-Nav'}  withLabel={false} type={'search'} placeholder={'Buscar'} custoClassInput={'input-Search'} />
        
        <nav className='container-nav-Type'>
          <ul>
            <GlobalLink  valueStr={'INICIO'} url={'/home'} />
            <GlobalLink  valueStr={'ROPA'} url={'/Clothing'} />
            <GlobalLink  valueStr={'CALZADO'} url={'/Footwear'} />
          </ul>
        </nav>
        
        <nav className='container-nav-Icons'>
          <ul>
            <GlobalLink  icon={<FiShoppingCart/>} url={'/ShoppingCart'}   />
            <GlobalLink  icon={<FaHeart/>} />
            <GlobalLink icon={<FaUser />} handleLink={handleModalOpen} />
          </ul>
        </nav>
      </div>
      
      <ModalAuth open={modalOpen} handleClose={handleModalClose} />
    </>
  )
}
