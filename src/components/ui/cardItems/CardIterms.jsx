import './CardItems.css';
import ButtonLike from './buttonLike/ButtonLike';
import GlobalLink from '../link/Link';

export default function CardItems({customClassCard, image, price, description, stok, showLikeButton , onClick}) {
  return (
    <>
        <div id='main-card' className={customClassCard}>

            <div className='container-media'>

                {showLikeButton && (
                    <span className='container-button-like'>
                        <ButtonLike />
                    </span>
                )}
                
                <div className='container-img'>
                    <img src={image} alt="Nike" className='img-card' />
                </div>

                <span className='container-price'>
                    <h4>{price}</h4>
                </span>

            </div>

            <div className='description-card'>
                <h3>{description}</h3>
                <p>{stok}</p>

                
            </div>
            
        
            <GlobalLink valueStr='Comprar' customClassLink={'link-card'} handleLink={onClick}/>

        </div>
    </>
  )
}
