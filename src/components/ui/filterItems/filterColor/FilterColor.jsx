import React from 'react'

export default function FilterColor({customClassColor}) {
  return (
    <>
        <div className={customClassColor}>
        <label for="color-select" className="color-label">
          Color
        </label>
        <select name="color-select" id="color-select">
          <option value="none"></option>
          <option value="Amarillo"> Amarillo </option>
          <option value="Azul"> Azul </option>
          <option value="Blanco"> Blanco </option>
          <option value="Dorado"> Dorado </option>
          <option value="Gris"> Gris </option>
          <option value="Morado"> Morado </option>
        </select>
      </div>
    </>
  )
}
