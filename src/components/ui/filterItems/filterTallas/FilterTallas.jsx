import React from "react";


export default function FilterTallas({customClassTallas}) {
  return (
    <>
      <div className={customClassTallas}>
        <label for="tallas-select" className="label-tallas">
          Talla
        </label>
        <select name="tallas-select" id="tallas-select">
          <option value="none"></option>
          <option value="Talla 1"> Adidas </option>
          <option value="Talla 2">Talla 2</option>
          <option value="Talla 3">Talla 3</option>
          <option value="Talla 4"> Talla 4 </option>
          <option value="Talla 5">Talla 5</option>
          <option value="Talla 6">Talla 6</option>
        </select>
      </div>
    </>
  );
}
