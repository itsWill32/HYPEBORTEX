import './AdminEditProduct.css';
import GlobalInput from '../../../components/ui/input/Input';
import GlobalButton from '../../../components/ui/button/Button';
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