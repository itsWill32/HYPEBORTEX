import './Buys.css'
import FormBuys from './FormBuys/FormBuys';

  function Buys() {
   return (
    <>
        <div className='container-buys'>
            <div className="container-buys-forms">
              <FormBuys/>
              <FormBuys/>
              <FormBuys/>
              <FormBuys/>
              <FormBuys/>
            </div>
        </div>
    </>
    );
  }
  
  export default Buys;