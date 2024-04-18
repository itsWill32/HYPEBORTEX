import { useState,useEffect } from 'react';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import FilterItems from '../../../components/ui/filterItems/FilterItems';
import CardItems from '../../../components/ui/cardItems/CardIterms';
import Footer from '../../../components/pages/footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




import './Clothing.css'

export default function Clothing() {

  const navega = useNavigate();

  const [sneakersLista, setSneakersLista] = useState([]);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const getAllProducts = async () => {
    try {
        const response = await axios.get('http://54.162.120.128:8000/api/v1/sneakers/allProducts');
        console.log('Datos que llegan',response.data);
        if (response.data && Array.isArray(response.data.snaekers)) {
            const filteredProducts = response.data.snaekers.filter(product => product.category === 'Clothes');
            setSneakersLista(filteredProducts);
            console.log('La lista se guardo', filteredProducts);
        } else {
            console.error('La respuesta no tiene la estructura esperada.');
        }
    } catch (error) {
        console.error('Error al enviar la petición:', error.message);
    }
};

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
      <Navbar openLogin={() => setIsLoginModalOpen(true)} />
      <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className="main-clothing">
        <FilterItems />

        <div className="container-clothing">
        {sneakersLista.map(product => (
                      <CardItems onClick={() => handleProductClick(product._id)} price={`$ MXN ${product.price}`} description={product.name} stok={`Stock: ${product.stock}`} showLikeButton={true} image={`http://54.162.120.128:8000${product.imageURL}`} />
                    ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
