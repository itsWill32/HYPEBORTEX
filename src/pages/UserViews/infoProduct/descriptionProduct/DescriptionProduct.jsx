import './DescriptionProduct.css'


function DescriptionProduct ({ characteristics, materials }) {


return (
  <>
       <div className='descriptions-details'>
                <div className='characteristics-product'>
                  <h1>Caracteristicas</h1>
                  <p id='characteristics-product'>{characteristics} </p>
                </div>
                <div className='materials-product'>
                  <h1>Materiales</h1>
                  <p>{materials} Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
  </>
  );
}

export default DescriptionProduct;