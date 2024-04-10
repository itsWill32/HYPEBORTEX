import './DescriptionProduct.css'

function DescriptionProduct ({ characteristics, materials }) {
return (
  <>
       <div className='descriptions-details'>
                <div className='characteristics-product'>
                  <h1>Caracteristicas</h1>
                  <p id='characteristics-product'>{characteristics} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quae laudantium dolores dignissimos adipisci! Reprehenderit nostrum, accusantium est quis repudiandae soluta reiciendis rem totam, dolor numquam nesciunt excepturi, asperiores delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque officiis natus suscipit cupiditate excepturi iste quas, quae consequuntur rem quaerat unde quisquam. Veritatis aliquid provident facilis quaerat sequi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet, ab id facilis expedita aliquam quasi! Iure sed at, provident, id ratione perspiciatis culpa, unde ad impedit laboriosam odit fuga! </p>
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