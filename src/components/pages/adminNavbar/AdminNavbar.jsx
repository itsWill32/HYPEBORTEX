import React from 'react'
import './AdminNavbar.css'
import GlobalLink from '../../ui/link/Link'
import { FaUser } from 'react-icons/fa';



export default function AdminNavbar({openModalAdmin}) {
  return (
    <>
        <div className='main-header-A'>

            

            <nav className='container-nav'>
                <ul>
                <GlobalLink  valueStr='ADMINISTRADOR' url={"/ADMIN/Home"}  />
                </ul>
            </nav>
            
            <nav className='container-nav-Icons-A'>
                <ul>
                    <GlobalLink  icon={<FaUser/>} handle={openModalAdmin}  />
                </ul>
            </nav>

        </div>
    </>
  )
}
