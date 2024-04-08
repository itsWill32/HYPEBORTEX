import React from 'react';
import './FilterPrice.css'

export default function FilterPrice({customClassPrice}) {

  return (
    <>
    <div className={customClassPrice}>
        <label for="price-select" className="label-price">
          Ordenar por
        </label>
        <select name="price-select" id="price-select">
          <option value="none"></option>
          <option value="Nuestra Seleccion"> Nuestra Seleccion </option>
          <option value="Primero lo mas recieente">Primero lo mas recieente</option>
          <option value="Precio: del mas alto al mas bajo">Precio: del mas alto al mas bajo</option>
          <option value="Precio: del mas bajo al mas alto"> Precio: del mas bajo al mas alto </option>
        </select>
      </div>
    </>
  );
}
