import GlobalLink from '../../../components/ui/link/Link';
import './AdminHome.css';
// import imagenRegistro from '../../assets/img/informe-medico.png';
// import imagenEditar from '../../assets/img/escritura.png';
// import imagenVentas from '../../assets/img/grafico.png';
import Navbar from '../../../components/pages/navbar/Nabvar';

export default function AdminHome() {
    return (

      <>
      <Navbar />
        <div className='HomeAdmin'>
            <div className='container-homeAdmin'>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                          {/* <img src={imagenRegistro} alt="" /> */}
                     </div>
                <div className='container-button-homeAdmin'>
                  <GlobalLink valueStr={'Añadir Producto'}  customClassLink={'button-Add-A'} url={"/ADMIN/AddProduct"} /> 
                </div>
                </div>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                     {/* <img src={imagenEditar} alt="" /> */}
                     </div>
                <div className='container-button-homeAdmin'>
                  <GlobalLink valueStr={'Editar Producto'}  customClassLink={'button-Edit-A'} url={"/ADMIN/EditProduct"} /> 
                </div>
                </div>
                <div className='container-card-homeAdmin'>
                     <div className='container-img-homeAdmin'>
                     {/* <img src={imagenVentas} alt="" /> */}
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

