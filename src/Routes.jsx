import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<div>Listo</div>} />
        <Route path="*"  element={<div><h1>no encontrado</h1></div>}  />
      </Routes>
    </BrowserRouter>
  );
} 

export default Rutas;

// {/*

//   HOME
//   COMPLETAR PERFIL
//   ARTICULOS
//   VISTA PRODUCTO SELECCIONADO 
//   CARRITO DE COMPRAS
//   LISTA DE DESEOS

//   HOME ADMIN
//   DASHBOARD ADMIN
//   AGREGAR PRODUCTO ADMIN
//   EDITAR ARTICULO
// */}