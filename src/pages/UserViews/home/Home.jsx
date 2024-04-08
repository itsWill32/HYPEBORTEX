import { useState } from 'react';
import './Home.css';
import Anuncio from '../../../assets/img/comercial.png';
import CardItems from '../../../components/ui/cardItems/CardIterms'
import Producto1 from "../../../assets/img/NikeMag.png";
import Producto2 from "../../../assets/img/mcqueen.png";
import Producto3 from "../../../assets/img/Nike-Freddy-Krueger.png";
import Short from '../../../assets/img/short.png';
import Jeans from '../../../assets/img/jean.png';
import Navbar from '../../../components/pages/navbar/Nabvar';
import Login from '../../../components/pages/login/Login';
import Footer from '../../../components/pages/footer/Footer';

export default function Home() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
        <Navbar openLogin={() => setIsLoginModalOpen(true)} />
        <Login isOpen={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
        <div className='container-main'> 
            <div className='commercial-container'>
                <img src={Anuncio} alt="anuncio-main" />
            </div>

            <div className='container-sneakers'>
                <h2>¿Un nuevo par de tenis? Encuentralo aquí</h2>
                <div className='sneakers'>
                    <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} showLikeButton={true} image={Producto1} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Producto2} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Producto3} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Producto1} />
                </div>
            </div>

            <div className='container-moda'>
                <h2>Productos destacados</h2>
                <div className='featured-Products'>
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Short} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Jeans} customClassCard={'short-card'} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Short} />
                    <CardItems price={'$416,790'} description={'NIKE MAG BACK TO THE FUTURE'} stok={'SOLD'} showLikeButton={true} image={Jeans} />
                </div>
            </div>
        </div>
        <Footer customClassFooter={'footer-home'} />
    </>
  )
}