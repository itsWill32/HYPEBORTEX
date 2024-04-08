import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/UserViews/home/Home';
import Clothing from './pages/UserViews/clothing/Clothing';
import Footwear from './pages/UserViews/footwear/Footwear';
import InfoProduct from './pages/UserViews/infoProduct/InfoProduct';
import PurchasesMade from './pages/UserViews/purchasesMade/PurchasesMade';
import ShoppingCart from './pages/UserViews/shoppingCart/ShoppingCart';
import UserRegistration from './pages/UserViews/userRegistration/UserRegistration'

import NotFound from './pages/UserViews/not-found/NotFound';

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)