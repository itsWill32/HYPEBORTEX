import './SalesAdmin.css';
import FormSearchSales from './formSearchSales/FormSearchSales';
import DashboardSales from './DashboardSales/DashboardSales';
import FormSales from './formSales/FormSales';
import NavbarAdmin from '../../../components/pages/adminNavbar/AdminNavbar'
import axios from 'axios';
import { useState , useEffect} from 'react';

export default  function SalesAdmin () {
    //get datos
    const [ventaDatos, setVentaDatos] = useState([]);

    const getAllVentas = async () => {
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
    
            const response = await axios.get('http://54.162.120.128:8000/api/v1/sales/ventasData', config);
            const dataRes = response.data.ventas;
            setVentaDatos(dataRes);
            console.log('La lista se guardo',dataRes);
        } catch (error) {
            console.error('Error al enviar la petición:', error.message);
        }
    };
    //get tennis
    const [sneakersLista, setSneakersLista] = useState([]);
    const getSnk = async (id) => {
        const idPro = id;
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

    //get user

    useEffect(() => {
        getAllVentas();
      }, []);
   return (
    <>
    <NavbarAdmin />
       <div className='container-salesAdmin'>
            <div className='container-searchSales'>
                <div className='container-form-searchSales'>
                    <FormSearchSales/>
                </div>
                <div className='container-form-Sales'>
                    {ventaDatos.map(cont => (
                        <FormSales productName={cont.products[0]} userName={cont.reciver} total={cont.total}/>
                    ))}
                    
                </div>
            </div>
            <div className='container-sales-dashBoard'>
                <div className='sales-dashboard'>
                    <h1>Venta del mes</h1>
                    <DashboardSales/>
                </div>
            </div>
       </div>
    </>
    );
  }
  