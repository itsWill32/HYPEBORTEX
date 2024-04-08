import { useState } from 'react';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import FilterItems from '../../../components/ui/filterItems/FilterItems';
import CardItems from '../../../components/ui/cardItems/CardIterms';
import Producto1 from "../../../assets/img/short.png";
import Footer from '../../../components/pages/footer/Footer';


import './Clothing.css'

export default function Clothing() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <Navbar openLogin={() => setIsLoginModalOpen(true)} />
      <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
      <div className="main-clothing">
        <FilterItems />

        <div className="container-clothing">
          <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} showLikeButton={true} />
          <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"AVAILBLE"} image={Producto1} showLikeButton={true} />
          <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} showLikeButton={true} />
          <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} showLikeButton={true} />
          <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} showLikeButton={true} />
        </div>
      </div>

      <Footer />
    </>
  )
}
