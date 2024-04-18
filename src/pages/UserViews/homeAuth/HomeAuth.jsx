import '../home/Home';
import Anuncio from '../../../assets/img/comercial.png';
import CardItems from '../../../components/ui/cardItems/CardIterms'
import Short from '../../../assets/img/short.png';
import Jeans from '../../../assets/img/jean.png';
import Footer from '../../../components/pages/footer/Footer';
import NabvarAuth from '../../../components/pages/navbarAuth/NavbarAuth';
import { useState , useEffect} from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HomeAuth() {

  const navega = useNavigate();

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
      <NabvarAuth  />
      

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
