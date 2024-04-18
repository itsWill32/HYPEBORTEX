import './ShoppingCart.css';
import { useState , useEffect} from 'react';
import FormShopping from './formShopping/FormShopping';
import FormSummaryBuy from './formSummaryBuy/FormSummaryBuy'; 
import PaymentMethod from './paymentMethod/PaymentMethod';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';
import axios from 'axios';

export default  function ShoppingCart() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [UserLista, setUserLista] = useState([]);

  const [sneakersLista, setSneakersLista] = useState([]);

  const getUser = async () => {

    const idPro = localStorage.getItem('IdUser');
    
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
      const response = await axios.get(`http://54.162.120.128:8000/api/auth/getUsr/${idPro}`,config);
      setUserLista(response.data.user);
      console.log( "Data que se guarda " ,response.data.user.shopingcar[0]);
      const id = response.data.user.shopingcar[0] ;
      getSnk(id);
     
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('ID no encontrado');
      } else {
        throw new Error('Error del servidor');
      }
    }
  }
  
  //Buscar el temmios 
  const getSnk = async (id) => {
    const idPro = id
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
      console.log( "Data que se guarda del shoe" ,response.data.snk);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('ID no encontrado');
      } else {
        throw new Error('Error del servidor');
      }
    }
  }

  useEffect(() => {
    getUser();
  }, []);
   return (
    <>
      <Navbar openLogin={() => setIsLoginModalOpen(true)} />
      <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className='container-ShoppingCart'>
        <div className='container-formShop'>
        <FormShopping name={sneakersLista.name} size={sneakersLista.size} price={sneakersLista.price} quantity={'1'} imgUrl={sneakersLista.imageURL}/>
        </div>
        <div className='container-formSummary'>
            <div className='container-formSummarPay'>
                <FormSummaryBuy productTotal={sneakersLista.price} deliveryCost={'99'} totalPrice={sneakersLista.price} id={sneakersLista._id}/>
            </div>
          <div className='container-formSummary-payMethod'>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
    );
  }
 