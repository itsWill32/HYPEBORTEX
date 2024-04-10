import './FormSummaryBuy.css';
import GlobalButton from '../../../../components/ui/button/Button';

function FormSummaryBuy({ productCount, productTotal, deliveryCost, totalPrice }) {
    return (
      <>
        <div className='container-summaryBuy'>
          <h1>RESUMEN DEL PEDIDO</h1>
          <div className='info-product-summaryBuy'>
            <p>PRODUCTOS({productCount})</p>
            <p>${productTotal}</p>
          </div>
          <div className='info-delivery-summaryBuy'>
            <p>ENVIO</p>
            <p>${deliveryCost}</p>
          </div>
          <hr className='line' />
          <div className='info-total-summaryBuy'>
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <div className='container-button-pay'>
            <GlobalButton content="Confirmar pago" customClassButton="button-pay" />
          </div>
        </div>
      </>
    );
  }
   
   export default FormSummaryBuy;
 