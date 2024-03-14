import React from 'react'
import './CardItems.css'
import Nike from '../../../assets/img/NikeMag.png'
import ButtonLike from './buttonLike/ButtonLike'

export default function CardIterms({customClassCard}) {
  return (
    <>
        <div id='main-card' className={customClassCard}>

            <div className='container-media'>

                <span className='container-button-like'>
                    <ButtonLike />
                </span>

                <img src={Nike} alt="Nike" className='img-card' />

                <span className='container-price'>
                    <h4>$416,790</h4>
                </span>

            </div>

            <div className='description-card'>
                <h3>Nike Mag Back to the Future</h3>
                <p>Sold</p>
            </div>

        </div>
    </>
  )
}
