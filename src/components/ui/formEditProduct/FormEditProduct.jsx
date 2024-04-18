import './FormEditProduct.css'
import React from 'react';
import GlobalInput from '../input/Input';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';


export default function FormEditProduct() {
    
    const [selectedProductId, setSelectedProductId] = useState('');
    const [productData, setProductData] = useState({
        _id: '',
        name: '',
        model: '',
        size: '',
        price: '',
        stock: '',
        brand: '',
        category: '',
        charasterics: '',
        materials: ''
    });
    const [sneakersLista, setSneakersLista] = useState([]);

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const getAllProducts = async () => {
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

            const response = await axios.get('http://54.162.120.128:8000/api/v1/sneakers/allProducts', config);
            const dataRes = response.data.snaekers;
            setSneakersLista(dataRes);
        } catch (error) {
            console.error('Error al enviar la petición:', error.message);
        }
    };

    const handleProductSelect = (productId) => {
        setSelectedProductId(productId);
        const selectedProduct = sneakersLista.find(product => product._id === productId);
        if (selectedProduct) {
            setProductData(selectedProduct);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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

            const response = await axios.put(`http://54.162.120.128:8000/api/v1/sneakers/esditSnk/${selectedProductId}`, productData, config);
            console.log(response.data);
            window.location.reload()
            

        } catch (error) {
            console.error('Error al enviar la petición:', error.message);
        }
    };

    const handleDelete = async () => {
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

            const response = await axios.delete(`http://54.162.120.128:8000/api/v1/sneakers/deleteSnk/${selectedProductId}`, config);
            console.log(response.data);
            
            window.location.reload()
        } catch (error) {
            console.error('Error al enviar la petición:', error.message);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className='editProduct-content'>
            <div className='search-nameE'>
                <select name='_id' onChange={(e) => handleProductSelect(e.target.value)} className='input-searchE'>
                    <option value="">Artículo a editar</option>
                    {sneakersLista.map(articulo => (
                        <option key={articulo._id} value={articulo._id}>{articulo.name}</option>
                    ))}
                </select>
            </div>
            <div className='container-edit-parts'>
                <div className='right-container-edit'>
                    <GlobalInput name="name" onChange={inputChange} type={'text'} withLabel={true} label={'nombre del articulo:'} placeholder={'Nombre'} custoClassInput={'input-registro'} value={productData.name} />
                    <GlobalInput name="model" onChange={inputChange} type={'text'} withLabel={true} label={'Modelo:'} placeholder={'Modelo'} custoClassInput={'input-registro'} value={productData.model} />
                    <GlobalInput name="size" onChange={inputChange} type={'text'} withLabel={true} label={'Talla:'} placeholder={'Talla'} custoClassInput={'input-registro'} value={productData.size} />
                    <GlobalInput name="price" onChange={inputChange} type={'number'} withLabel={true} label={'Precio:'} placeholder={'$'} custoClassInput={'input-registro'} value={productData.price} />
                    <GlobalInput name="stock" onChange={inputChange} type={'number'} withLabel={true} label={'Stock:'} placeholder={'Cantidad'} custoClassInput={'input-registro'} value={productData.stock} />
                </div>
                <div className='left-container-edit'>
                    <div className='container-categories-edit'>
                        <GlobalInput name="brand" onChange={inputChange} type={'text'} withLabel={true} label={'Marca:'} placeholder={'Marca'} custoClassInput={'input-registro'} value={productData.brand} />
                        <GlobalInput name="category" onChange={inputChange} type={'text'} withLabel={true} label={'Categoría:'} placeholder={'Categoría'} custoClassInput={'input-registro'} value={productData.category} />
                        <GlobalInput name="Caracteristicas" onChange={inputChange} type={'text'} withLabel={true} label={'Caracteristicas'} placeholder={'Caracteristicas'} custoClassInput={'input-registro'} value={productData.charasterics} />
                        <GlobalInput name="materials" onChange={inputChange} type={'text'} withLabel={true} label={'materials'} placeholder={'materials'} custoClassInput={'input-registro'} value={productData.materials} />
                        <button onClick={handleSubmit} className='button-keepE'>Guardar Cambios</button>
                    </div>
                    
                    
                    <button onClick={handleDelete} className='button-delete'>Eliminar Artículo</button>
                </div>
            </div>
        </div>
    );
}