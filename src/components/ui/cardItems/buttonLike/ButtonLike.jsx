import React from 'react'
import Favorito from '../../../../assets/img/favorito.png'
import FavoritoActivo from '../../../../assets/img/favorito-activo.png'
import './ButtonLike.css'

export default function ButtonLike({customClassLike}) {
  return (
    <>
        <div id="favoritos-container"  className={customClassLike}>
            <input type="checkbox" id="favorito-toggle" />
            <label for="favorito-toggle">
                <img className="favoritos-img favorito-normal" src={Favorito} alt='like-disabled' ></img>

                <img className="favoritos-img favorito-activo" src={FavoritoActivo} alt='like-active' ></img>
            </label>
        </div>
    </>
  )
}
