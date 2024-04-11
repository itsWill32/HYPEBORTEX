import './formAddProduct.css';
import React from 'react';
import GlobalInput from '../input/Input';
import { useState } from 'react';

export default function FormAddProduct() {

    const [body, setBody] = useState({name :'' , model:'', size:'', price:'', brand:'', stock:'', category:'', imageURL:''})

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })}
    





    return (
        <div className='registerProduct-content'>
            <div className='right-container'>
                <GlobalInput name="" onChange={inputChange} type={'file'} withLabel={true} label={'Ingresa la imagen de tu archivo'} placeholder={''} custoClassInput={'input-registro'} />   
                <GlobalInput name="" onChange={inputChange} type={'text'} withLabel={true} label={'nombre del articulo:'} placeholder={'nombre'} custoClassInput={'input-registro'} /> 
                <GlobalInput name="" onChange={inputChange} type={'number'} withLabel={true} label={'precio del articulo'} placeholder={'$'} custoClassInput={'input-registro'} />  
                <GlobalInput name="" onChange={inputChange} type={'number'} withLabel={true} label={'talla'} placeholder={'talla'} custoClassInput={'input-registro'} />   
                <GlobalInput name="" onChange={inputChange} type={'number'} withLabel={true} label={'stock'} placeholder={'cantidad'} custoClassInput={'input-registro'} />   
            </div>
            <div className='left-container'>
                <div className='container-categories'>
                    <GlobalInput name={''} type={'text'} withLabel={true} label={'caracteristicas del articulo:'} placeholder={'nombre'} custoClassInput={'input-description'} /> 
                    <GlobalInput type={'text'} withLabel={true} label={'materiales:'} placeholder={'nombre'} custoClassInput={'input-materials'} /> 
                    <label className='label-registro' htmlFor="miSelector">CATEGORIAS:</label>
                    <select className='select-register' id="miSelector">
                        <option value="opcion1">Opcion 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
