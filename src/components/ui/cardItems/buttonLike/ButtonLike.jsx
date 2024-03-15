import React from 'react';
import Favorito from '../../../../assets/img/favorito.png';
import FavoritoActivo from '../../../../assets/img/favorito-activo.png';
import './ButtonLike.css';
import Swal from 'sweetalert2';

export default function ButtonLike({ customClassLike }) {
  const handleLikeClick = () => {
    Swal.fire({
      title: "¡Agregado a favoritos!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div id="favoritos-container" className={customClassLike} onClick={handleLikeClick}>
      <input type="checkbox" id="favorito-toggle" />
      <label htmlFor="favorito-toggle">
        <img className="favoritos-img favorito-normal" src={Favorito} alt='like-disabled' />
        <img className="favoritos-img favorito-activo" src={FavoritoActivo} alt='like-active' />
      </label>
    </div>
  );
}
