import './ShoppingCart.css';
import { useState } from 'react';
import FormShopping from './formShopping/FormShopping';
import FormSummaryBuy from './formSummaryBuy/FormSummaryBuy'; 
import PaymentMethod from './paymentMethod/PaymentMethod';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';

export default  function ShoppingCart() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

   return (
    <>
      <Navbar openLogin={() => setIsLoginModalOpen(true)} />
      <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className='container-ShoppingCart'>
        <div className='container-formShop'>
        <FormShopping/>
        </div>
        <div className='container-formSummary'>
            <div className='container-formSummarPay'>
                <FormSummaryBuy/>
            </div>
          <div className='container-formSummary-payMethod'>
            <PaymentMethod/>
          </div>
        </div>
      </div>

      <Footer />
    </>
    );
  }
 