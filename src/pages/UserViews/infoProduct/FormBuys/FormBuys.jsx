import './FormBuys.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function FormBuys({ name, size, price, quantity, status, trackingId }) {
  return (
    <>
      <div className='conteiner-form-buys'>
          <div className='conteiner-img-buys'></div>
          <div className='container-info-product-buys'>
              <div className='data-buys-product1'>
                  <div className='form-name-product-buys'>
                       <h1>Name Articule</h1>
                       <p>Nombre ejemplo{name}</p>
                  </div>
                  <div className='form-size-product-buys'>
                      <h1>Size</h1>
                      <p>Talla 10,23{size}</p>
                  </div>
                  <div className='form-price-product-buys'>
                      <h1>Price</h1>
                      <p>100.000{price}</p>
                  </div>
              </div>
              <div className='data-buys-product2'>
                  <div className='form-quantity-product-buys'>
                    <h1>Quantity</h1>
                    <p>10{quantity}</p>
                  </div>
                  <div className='form-state-product-buys'>
                    <h1>Status</h1>
                    <p>Entregado{status}</p>
                  </div>
                  <div className='form-id-product-buys'>
                    <h1>Tracking ID</h1>
                    <p>0090909{trackingId}</p>
                  </div>
             </div>
          </div> 
          <div className='delete-icon-container-buys'>
              <AiOutlineCloseCircle />
          </div>
      </div>
    </>
  );
}
   
   export default FormBuys;
 