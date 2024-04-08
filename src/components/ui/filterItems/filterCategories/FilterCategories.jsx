import React from "react";

export default function FilterCategories({customClassCategories}) {
  return (
    <>
      <div className={customClassCategories}>
        <label for="categories-select" className="label-categories">
          Categoria
        </label>
        <select name="categories-select" id="categories-select">
          <option value="none"></option>
          <option value="Abrigos"> Abrigos </option>
          <option value="Bolsos">Bolsos</option>
          <option value="Vestidos">Vestidos</option>
          <option value="Abrigos"> Abrigos </option>
          <option value="Bolsos">Bolsos</option>
          <option value="Vestidos">Vestidos</option>
        </select>
      </div>
    </>
  );
}
