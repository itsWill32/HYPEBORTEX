import './AdminEditProduct.css';
import GlobalInput from '../../../components/ui/input/Input';
import GlobalButton from '../../../components/ui/button/Button';
import FormEditProduct from '../../../components/ui/formAddProduct/formAddProduct';
import NavbarAdmin from '../../../components/pages/adminNavbar/AdminNavbar'
import { useState,useEffect } from 'react';


import  axios from 'axios'



export default function AdminEditProduct() {

   

    const [sneakersLista, setSneakers] = useState([]);

    const getAllProducts = async () => {
            try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No se encontró el token JWT en las cookies');
          }
    
          const formDataToSend = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });
    
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
    
          const response = await axios.get('http://localhost:8000/api/v1/sneakers/allProducts', config);
          const dataRes = response.data.snaekers;
          console.log(dataRes);
          setSneakers(dataRes);
          console.log("esto es la lista local",sneakersLista);
          
        } catch (error) {
          console.error('Error al enviar la petición:', error.message);
        }

    }

    //Peticion Editar

    const [formData, setFormData] = useState({
        name: '',
        model: '',
        size: '',
        price: '',
        brand: '',
        stock: '',
        category: '',
        materials: '',
        imageIdentify: null
      });

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: files ? files[0] : value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No se encontró el token JWT en las cookies');
          }
    
          const formDataToSend = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });
    
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          };
    
          const response = await axios.post(`http://localhost:8000/api/v1/sneakers/editSnk/`, formDataToSend, config);
          console.log(response.data);
          alert('Exsitosamente Agregado')
        } catch (error) {
          console.error('Error al enviar la petición:', error.message);
        }
      };

      useEffect(() => {
        getAllProducts();
      },[sneakersLista], []);

   return (
    <>
    <NavbarAdmin />
    <div className='search-nameE'>

         <select name={'Input-NameEdit'} onChange={inputChange} custoClassInput={'input-searchE'}>
            <option value="">Articula a editar </option>
            {sneakersLista.map(articulo => (
                <option value={articulo._id}>{articulo.name}</option>
            ))};
            

         </select>
         <GlobalButton content="buscar articulo" customClassButton="button-searchE" />
   </div>
     <div className='editProduct-containerE'>
            <div className='editProductE'>
               
               
            <form encType='multipart/form-data' onSubmit={handleSubmit} className='registerProduct-content'>
            <div className='right-container'>
                
                <GlobalInput name='imageIdentify' type="file" onChange={handleChange} withLabel={true} label={'Ingresa la imagen de tu archivo'} placeholder={''} custoClassInput={'input-registro'} />
                <GlobalInput name="name" onChange={inputChange} type={'text'} withLabel={true} label={'nombre del articulo:'} placeholder={'nombre'} custoClassInput={'input-registro'} />
                <GlobalInput name="price" onChange={inputChange} type={'number'} withLabel={true} label={'precio del articulo'} placeholder={'$'} custoClassInput={'input-registro'} />
                <GlobalInput name="size" onChange={inputChange} type={'number'} withLabel={true} label={'talla'} placeholder={'talla'} custoClassInput={'input-registro'} />
                <GlobalInput name="stock" onChange={inputChange} type={'number'} withLabel={true} label={'stock'} placeholder={'cantidad'} custoClassInput={'input-registro'} />
                <GlobalInput name="model" onChange={inputChange} type={'text'} withLabel={true} label={'Modelo'} placeholder={'Modelo'} custoClassInput={'input-registro'} />
            </div>

            <div className='left-container'>
                <div className='container-categories'>
                    <GlobalInput name="brand" onChange={inputChange} type={'text'} withLabel={true} label={'Marca'} placeholder={'MARCA'} custoClassInput={'input-registro'} />
                    <GlobalInput name='charasterics' onChange={inputChange} type={'text'} withLabel={true} label={'caracteristicas del articulo:'} placeholder={'nombre'} custoClassInput={'input-description'} />
                    <GlobalInput name='materials' onChange={inputChange} type={'text'} withLabel={true} label={'materiales:'} placeholder={'nombre'} custoClassInput={'input-materials'} />
                    <label className='label-registro' htmlFor="miSelector">CATEGORIAS:</label>
                    <select name='category' onChange={inputChange} className='select-register' id="miSelector">
                        <option value="Elige la categoria"></option>
                        <option value="Calzado">Calzado</option>
                        <option value="Ropas">Ropas</option>
                    </select>
                </div>
                <br />
                <button type='submit' className='button-keep'>GUARDAR</button>
            </div>
        </form>



            </div>
        </div>
    </>
    );
  }
  