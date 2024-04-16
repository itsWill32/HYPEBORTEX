import React from 'react'
import './Nabvar.css'
import GlobalInput from '../../ui/input/Input'
import GlobalLink from '../../ui/link/Link'
import { FaUser } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";



export default function Nabvar({openLogin}) {
  return (
    <>
        <div className='main-header'>


            <GlobalInput name={'Search-Nav'}  withLabel={false} type={'search'} placeholder={'Buscar'} custoClassInput={'input-Search'} />
            

            <nav className='container-nav-Type'>
                <ul>
                    <GlobalLink  valueStr={'INICIO'} url={'/'} />
                    <GlobalLink  valueStr={'ROPA'} url={'/Clothing'} />
                    <GlobalLink  valueStr={'CALZADO'} url={'/Footwear'} />
                </ul>
            </nav>
            
            <nav className='container-nav-Icons'>
                <ul>
                    <GlobalLink  icon={<FiShoppingCart/>} url={'/ShoppingCart'}   />
                    <GlobalLink  icon={<FaHeart/>} />
                    
                    <GlobalLink  icon={<FaUser/>} handle={openLogin}  />
                </ul>
            </nav>

        </div>
    </>
  )
}
