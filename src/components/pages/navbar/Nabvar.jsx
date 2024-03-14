import React from 'react'
import './Nabvar.css'
import GlobalInput from '../../ui/input/Input'
import GlobalLink from '../../ui/link/Link'
import { FaUser } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


export default function Nabvar() {
  return (
    <>
        <div className='main-header'>


            <GlobalInput withLabel={false} type={'search'} placeholder={'Buscar'} />
            

            <nav className='container-nav-Type'>
                <ul>
                    <GlobalLink  valueStr={'INICIO'}   />
                    <GlobalLink  valueStr={'ROPA'} />
                    <GlobalLink  valueStr={'CALZADO'} />
                </ul>
            </nav>
            
            <nav className='container-nav-Icons'>
                <ul>
                    <GlobalLink  icon={<FiShoppingCart/>} customClassLink={'link-nav-I'} />
                    <GlobalLink  icon={<FaHeart/>} />
                    <GlobalLink  icon={<FaUser/>} />
                </ul>
            </nav>

        </div>
    </>
  )
}
