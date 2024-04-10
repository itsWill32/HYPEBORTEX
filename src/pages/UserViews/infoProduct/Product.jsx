import './Product.css'
import { useState } from 'react'; 
import GlobalButton from '../../../components/ui/button/Button';
import DescriptionProduct from './descriptionProduct/DescriptionProduct';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';

export default function Product ({ productName, productDescription, productPrice }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
   <>
     <Navbar openLogin={() => setIsLoginModalOpen(true)} />
     <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className='contenedor-page-product'>
      <div className="container-picture"></div>
           <div className='container-data-product'>
             <div className='name-product'>
                 <h1 id='name-Product'>nombre del producto{productName}</h1>
                 <p id='description-product'>Descripcion{productDescription}</p>
             </div>
             <div className='price-product'>
                 <h1 id='price-product'>100,000{productPrice}</h1>
                 <p>iva incluido</p>
             </div>
             <div className='container-buttons'>
                <select id="select-tail" value="" onChange=""> <option value="">Selecciona la talla</option></select>
                <div className='container-buttons-white'>
                    <GlobalButton content="Añadir a la bolsa" customClassButton="button-white"/>
                    <GlobalButton content=" Añadir a Favoritos" customClassButton="button-white"/>
                </div>
             </div>
             <div className='data-delivery'>
                <h1>Envio y devolucion</h1>
                <p> Envío express : de 1 a 10 dias</p>
                <p> Entrar a la pagina de la paqueteria encargada con el id de rastreo para su seguimiento</p>
                <p>Devoluciones gratis en 14 días (no incluye artículos de rebajas finales)</p>
             </div>
        </div>
      </div>
      <div className='container-details'>
        <div className='details-product'>
           <DescriptionProduct/>
        </div>
      </div>
      <Footer />
  </>
  );
}
