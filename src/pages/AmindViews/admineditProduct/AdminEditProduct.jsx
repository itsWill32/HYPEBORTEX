import './AdminEditProduct.css';
import GlobalInput from '../../../components/ui/input/Input';
import GlobalButton from '../../../components/ui/button/Button';
import FormEditProduct from '../../../components/ui/formAddProduct/formAddProduct';
import NavbarAdmin from '../../../components/pages/adminNavbar/AdminNavbar'


export default function AdminEditProduct() {
   return (
    <>
    <NavbarAdmin />
    <div className='search-nameE'>
         <GlobalInput name={'Input-NameEdit'} onChange={InputChangeE} type={'text'} withLabel={true} label={' Ingrese el nombre del articulo a editar:'} placeholder={'nombre'} custoClassInput={'input-searchE'} /> 
         <GlobalButton content="buscar articulo" customClassButton="button-searchE" />
   </div>
     <div className='editProduct-containerE'>
            <div className='editProductE'>
               <FormEditProduct/>
               <GlobalButton content="Guardar cambios" customClassButton="button-keepE" />
            </div>
        </div>
    </>
    );
  }
  