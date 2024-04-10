
import './addProduct.css';
import FormAddProduct from '../../../components/ui/formAddProduct/formAddProduct';
import GlobalButton from '../../../components/ui/button/Button';

export default function addProduct() {
    return (
        <div className='addProduct-container'>
            <div className='addProduct'>
               <FormAddProduct/>
               <GlobalButton content="Registrar Articulo" customClassButton="button-keep" />
            </div>
        </div>
    );
}
