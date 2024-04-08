import React from "react";

export default function filterMarcas({customClassMarcas}) {
  return (
    <>
      <div className={customClassMarcas}>
        <label for="marcas-select" className="label-marcas">
          Marca
        </label>
        <select name="marcas-select" id="marcas-select">
          <option value="none"></option>
          <option value="Adidas"> Adidas </option>
          <option value="Nike">Nike</option>
          <option value="Versace">Versace</option>
          <option value="Panam"> Panam </option>
          <option value="Gucci">Gucci</option>
          <option value="Bape">Bape</option>
        </select>
      </div>
    </>
  );
}
