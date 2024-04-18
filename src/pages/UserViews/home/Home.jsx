import { useState , useEffect} from 'react';
import './Home.css';
import Anuncio from '../../../assets/img/comercial.png';
import CardItems from '../../../components/ui/cardItems/CardIterms'
import Producto1 from "../../../assets/img/NikeMag.png";
import Producto2 from "../../../assets/img/mcqueen.png";
import Producto3 from "../../../assets/img/Nike-Freddy-Krueger.png";
import Short from '../../../assets/img/short.png';
import Jeans from '../../../assets/img/jean.png';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';
import ModalAuth from '../../../components/ui/modalAuth/ModalAuth'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navega = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para controlar si el usuario está autenticado
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para controlar si la modal de inicio de sesión está abierta

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Una vez que el usuario se autentica correctamente, actualizamos el estado de autenticación
    setIsLoginOpen(false); // También cerramos la modal de inicio de sesión
  };

  const [sneakersLista, setSneakersLista] = useState([]);


  const getAllProducts = async () => {
    try {
        const response = await axios.get('http://54.162.120.128:8000/api/v1/sneakers/allProducts');
        const dataRes = response.data.snaekers;
        setSneakersLista(dataRes);
        console.log('La lista se guardo',dataRes);
    } catch (error) {
        console.error('Error al enviar la petición:', error.message);
    }
};
const [selectedProductId, setSelectedProductId] = useState(null);


const handleProductClick = (productId) => {
  setSelectedProductId(productId);
  localStorage.setItem('espificThing',productId);
  navega('/InfoProduct')

};


useEffect(() => {
  getAllProducts();
}, []);

  return (
    <>
      <Navbar openLogin={handleLoginOpen} />
      
      <Login isOpen={isLoginOpen} handleClose={handleLoginClose} handleLoginSuccess={handleLoginSuccess} />
      {isAuthenticated && <ModalAuth />}

        <div className='container-main'> 
            <div className='commercial-container'>
                <img src={Anuncio} alt="anuncio-main" />
            </div>

            <div className='container-sneakers'>
                <h2>¿Un nuevo par de tenis? Encuentralo aquí</h2>
                <div className='sneakers'>
                    {sneakersLista.map(product => (
                      <CardItems onClick={() => handleProductClick(product._id)} price={`$ MXN ${product.price}`} description={product.name} stok={`Stock: ${product.stock}`} showLikeButton={true} image={`http://54.162.120.128:8000${product.imageURL}`} />
                    ))}
                </div>
            </div>

            <div className='container-moda'>
                <h2>Productos destacados</h2>
                <div className='featured-Products'>
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Short} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Jeans} customClassCard={'short-card'} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Short} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Jeans} />
                </div>
            </div>
        </div>
        <Footer customClassFooter={'footer-home'} />
    </>
  )
}
