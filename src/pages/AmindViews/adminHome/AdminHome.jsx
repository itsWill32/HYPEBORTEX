import GlobalLink from '../../../components/ui/link/Link';
import './AdminHome.css';
import AddProduct from '../../../assets/img/addProd.jpg';
import EditProduct from '../../../assets/img/editProd.jpg';
import Sales from '../../../assets/img/sales.jpg';
import NavbarAdmin from '../../../components/pages/adminNavbar/AdminNavbar'

export default function AdminHome() {
    return (

      <>
      <NavbarAdmin />
        <div className='HomeAdmin'>
            <div className='container-homeAdmin'>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                          <img src={AddProduct} alt="" />
                     </div>
                <div className='container-button-homeAdmin'>
                  <GlobalLink valueStr={'Añadir Producto'}  customClassLink={'button-Add-A'} url={"/ADMIN/AddProduct"} /> 
                </div>
                </div>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                     <img src={EditProduct} alt="" />
                     </div>
                <div className='container-button-homeAdmin'>
                  <GlobalLink valueStr={'Editar Producto'}  customClassLink={'button-Edit-A'} url={"/ADMIN/EditProduct"} /> 
                </div>
                </div>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                     <img src={Sales} alt="" />
                     </div>
                <div className='container-button-homeAdmin'>
                  <GlobalLink valueStr={'Reporte de Ventas'}  customClassLink={'button-Sales-A'} url={"/ADMIN/Sales"} />
                </div>
                </div>
             </div>
        </div>

        </>
    );
}

