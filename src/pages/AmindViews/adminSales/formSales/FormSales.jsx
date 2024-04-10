import './FormSales.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function FormSales({ productName, quantity, price, total, userName, userEmail, status, date, time }) {
  return (
    <>
      <div className='conteiner-form-sales'>
        <div className='conteiner-img-sales'></div>
        <div className='container-info-product-sales'>
          <div className='data-sales-product1'>
            <div className='form-name-product-sales'>
              <h1>Nombre del artículo</h1>
              <p>ejemplo{productName}</p>
            </div>
            <div className='form-size-product-sales'>
              <h1>Cantidad</h1>
              <p>10{quantity}</p>
            </div>
            <div className='form-price-product-sales'>
              <h1>Precio</h1>
              <p>$2000{price}</p>
            </div>
            <div className='form-price-product-sales'>
              <h1>Total</h1>
              <p>$3000{total}</p>
            </div>
          </div>
          <div className='data-sales-product2'>
            <div className='form-quantity-product-sales'>
              <h1>Datos del usuario</h1>
              <p>christian j.{userName}</p>
              <p>gameplaycj123@{userEmail}</p>
            </div>
            <div className='form-state-product-sales'>
              <h1>Estatus</h1>
              <p>entregado{status}</p>
            </div>
            <div className='form-id-product-sales'>
              <h1>Fecha</h1>
              <p>22-04-2022{date}</p>
            </div>
            <div className='form-id-product-sales'>
              <h1>Hora</h1>
              <p>10:00{time}</p>
            </div>
          </div>
        </div>
        <div className='delete-icon-container-sales'>
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
}
   
   export default FormSales;