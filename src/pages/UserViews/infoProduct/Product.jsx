import './Product.css'
import { useState , useEffect} from 'react'; 
import GlobalButton from '../../../components/ui/button/Button';
import DescriptionProduct from './descriptionProduct/DescriptionProduct';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Product ({ productName, productDescription, productPrice }) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [sneakersLista, setSneakersLista] = useState([]);

  
    

  const getSnk = async () => {
    const idPro = localStorage.getItem('espificThing');
    try {
      const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró el token JWT en las cookies');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        console.log(idPro);
      const response = await axios.get(`http://54.162.120.128:8000/api/v1/sneakers/productUnique/${idPro}`,config);
      setSneakersLista(response.data.snk);
      console.log( "Data que se guarda " ,response.data.snk);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('ID no encontrado');
      } else {
        throw new Error('Error del servidor');
      }
    }
  }

  //agregar al carro
  const handleSubmit = async (e) => {

    const productData =({
      shopingcar : [ `${sneakersLista._id}`]
  });

    e.preventDefault();
    const idUser = localStorage.getItem('IdUser');
   

    console.log('El queanda',idUser);
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró el token JWT en las cookies');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        console.log('Antes de entrar',productData);
        const response = await axios.put(`http://54.162.120.128:8000/api/auth/EditUsr/${idUser}`,productData, config);
        console.log(response.data);
        Swal.fire({
          title: "Agregado Exitosamente",
          icon: "success"
        });
        
        

    } catch (error) {
        console.error('Error al enviar la petición:', error.message);
    }
};

useEffect(() => {
  getSnk();
}, []);


  return (
   <>
     <Navbar openLogin={() => setIsLoginModalOpen(true)} />
     <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className='contenedor-page-product'>
      <div className="container-picture">
        <img src={`http://54.162.120.128:8000${sneakersLista.imageURL}`} alt="" srcset="" />
      </div>
           <div className='container-data-product'>
             <div className='name-product'>
                 <h1 id='name-Product'>{sneakersLista.name}</h1>
                 <p id='description-product'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam at dicta aperiam ut maxime est, minima magni. In necessitatibus voluptatem odit optio reiciendis repellendus veniam maiores autem fugiat! Pariatur.</p>
             </div>
             <div className='price-product'>
                 <h1 id='price-product'>MXN $ {sneakersLista.price}</h1>
                 <p>iva incluido</p>
             </div>
             <div className='container-buttons'>
                <select id="select-tail" value="" onChange="">
                   <option value="">Selecciona la talla</option>
                   <option value={sneakersLista.size}>{sneakersLista.size}</option>
                </select>
                <div className='container-buttons-white'>
                    <GlobalButton onClickButton={handleSubmit} content="Añadir a la bolsa" customClassButton="button-white"/>
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
           <DescriptionProduct characteristics={sneakersLista.charasterics} materials={setSneakersLista.materials}/>
        </div>
      </div>
      <Footer />
  </>
  );
}
