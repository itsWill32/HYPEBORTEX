import './SalesAdmin.css';
import FormSearchSales from './formSearchSales/FormSearchSales';
import DashboardSales from './DashboardSales/DashboardSales';
import FormSales from './formSales/FormSales';

export default  function SalesAdmin () {
   return (
    <>
       <div className='container-salesAdmin'>
            <div className='container-searchSales'>
                <div className='container-form-searchSales'>
                    <FormSearchSales/>
                </div>
                <div className='container-form-Sales'>
                    <FormSales/>
                    <FormSales/>
                    <FormSales/>
                </div>
            </div>
            <div className='container-sales-dashBoard'>
                <div className='sales-dashboard'>
                    <h1>Venta del mes</h1>
                    <DashboardSales/>
                </div>
            </div>
       </div>
    </>
    );
  }
  