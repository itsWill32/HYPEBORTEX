import './FormSummaryBuy.css';
import GlobalButton from '../../../../components/ui/button/Button';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormSummaryBuy = ({ productCount, productTotal, deliveryCost, totalPrice , id }) => {

  const navegador = useNavigate();

  const reciverId = localStorage.getItem('IdUser');
  console.log(id);

  // Aquí estoy corrigiendo la forma en que creas el objeto formData
  const formData = {
    reciver: reciverId,
    products: [id] // No necesitas `${id}`, ya que id es una cadena
  };

  const handleVenta = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No se encontró el token JWT en las cookies');
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // Cambiado a 'application/json'
        }
      };

      // Utiliza JSON.stringify para serializar el objeto formData
      const response = await axios.post('http://localhost:8000/api/v1/sales/venta', formData, config);
      console.log(response.data);
      Swal.fire({
        title: "Compra Exitosa!",
        text: "Gracias por comprar en vortex!",
        icon: "success"
      });
      navegador('/')
    } catch (error) {
      console.error('Error al enviar la petición:', error.message, error);
    }
  };

  return (
    <>
      <div className='container-summaryBuy'>
        <h1>RESUMEN DEL PEDIDO</h1>
        <div className='info-product-summaryBuy'>
          <p>PRODUCTOS({productCount})</p>
          <p>${productTotal}</p>
        </div>
        <div className='info-delivery-summaryBuy'>
          <p>ENVIO</p>
          <p>${deliveryCost}</p>
        </div>
        <hr className='line' />
        <div className='info-total-summaryBuy'>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
        <div className='container-button-pay'>
          <GlobalButton onClickButton={handleVenta} content="Comprar" customClassButton="button-pay" />
        </div>
      </div>
    </>
  );
}

export default FormSummaryBuy;
