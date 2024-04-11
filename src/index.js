import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/UserViews/home/Home';
import Clothing from './pages/UserViews/clothing/Clothing';
import Footwear from './pages/UserViews/footwear/Footwear';
import InfoProduct from './pages/UserViews/infoProduct/Product.jsx'
import PurchasesMade from './pages/UserViews/purchasesMade/PurchasesMade';
import ShoppingCart from './pages/UserViews/shoppingCart/ShoppingCart';
import UserRegistration from './pages/UserViews/userRegistration/UserRegistration';
import NotFound from './pages/UserViews/not-found/NotFound';
import AdminHome from './pages/AmindViews/adminHome/AdminHome';
import AdminSales from './pages/AmindViews/adminSales/SalesAdmin';
import EditProduct from './pages/AmindViews/admineditProduct/AdminEditProduct';
import AddProduct from './pages/AmindViews/addProduct/addProduct';
import ModalAuth from './components/ui/modalAuth/ModalAuth'

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />
  },
  {
    path: "/Clothing",
    element: < Clothing />
  },
  {
    path: "/Footwear",
    element: < Footwear />
  },
  {
    path: "/InfoProduct",
    element: < InfoProduct />
  },
  {
    path: "/PurchasesMade",
    element: < PurchasesMade />
  },
  {
    path: "/ShoppingCart",
    element: < ShoppingCart />
  },
  {
    path: "/UserRegistration",
    element: < UserRegistration />
  },
  {
    path: "*",
    element: <  NotFound />
  },
  {
    path: "/ADMIN/Home",
    element: <  AdminHome />
  },
  {
    path: "/ADMIN/Sales",
    element: <  AdminSales />
  },  
  {
    path: "/ADMIN/AddProduct",
    element: <  AddProduct />
  },  
  {
    path: "/ADMIN/EditProduct",
    element: <  EditProduct />
  },  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)