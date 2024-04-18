import './AdminEditProduct.css';
import FormEditProduct from '../../../components/ui/formEditProduct/FormEditProduct';
import NavbarAdmin from '../../../components/pages/adminNavbar/AdminNavbar'


export default function AdminEditProduct() {
   return (
    <>
    <NavbarAdmin />
     <div className='editProduct-containerE'>
            <div className='editProductE'>
               <FormEditProduct/>
            </div>
        </div>
    </>
    );
  }