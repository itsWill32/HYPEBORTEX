import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/navbar/Nabvar'


function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/po' element={<Navbar />} />
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