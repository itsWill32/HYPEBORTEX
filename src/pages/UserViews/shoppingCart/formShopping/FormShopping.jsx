import './FormShopping.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function FormShopping({ name, size, price, quantity }) {
    return (
      <>
        <div className='conteiner-form-carShop'>
            <div className='conteiner-img'></div>
            <div className='container-info-product'>
                <div className='data-carShop-product1'>
                    <div className='form-name-product'>
                         <h1>Nombre del articulo</h1>
                         <p>EJEMPLO{name}</p>
                    </div>
                    <div className='form-size-product'>
                        <h1>TALLA</h1>
                        <p>10{size}</p>
                    </div>
                    <div className='form-price-product'>
                        <h1>PRECIO</h1>
                        <p>20,000{price}</p>
                    </div>
                </div>
                <div className='form-quantity-product'>
                <h1>Cantidad</h1>
                <p>10{quantity}</p>
                </div>
            </div> 
            <div className='delete-icon-container'>
                <AiOutlineCloseCircle />
            </div>
        </div>
      </>
    );
  }
  export default FormShopping;