import React from "react";
import "./Footer.css";
import GlobalLink from "../../ui/link/Link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Paypal from './contactosFooter/paypal.png'

export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container-parragraph">
          <div>
            <h1>HYPEBORTEX</h1>
            <p>
              EN HYPEBORTEX CREEMOS EN POTENCIAR LA INDIVIDUALIDAD.
              <br />
              NUESTRA MISION ES SER UNA PLATAFORMA DE TIENDA EN LINEA PARA LA
              MODA DE LUJO,
              <br />
              CONECTANDO A CREADORES Y CONSUMIDORES DE LAS MEJORES MARCAS QUE
              PUEDAN EXISTIR.
            </p>
          </div>
          <div className="container-contacts">
            <h2>CONTACTOS</h2>
            <GlobalLink
              valueStr={"963-156-5800"}
              customClassLink={"link-footer-C"}
            />
            <GlobalLink
              valueStr={"hypebortex@gmail.com"}
              customClassLink={"link-footer-C"}
            />
            <GlobalLink
              valueStr={"Av Siempre Viva"}
              customClassLink={"link-footer-C"}
            />
          </div>
        </div>
        <hr style={{width: "80%",marginLeft: "10%"}}/>

        <div className="container-payment-method">
          <h2> METODOS DE PAGO </h2>
          <img src={Paypal} alt="metodoPago" className="img-payment"></img>
        </div>

        <hr style={{width: "80%",marginLeft: "10%",}}
        />

        <div className="container-sociales">
          <GlobalLink customClassLink={"link-footer-I"} icon={<FaInstagram />}/>
          <GlobalLink customClassLink={"link-footer-I"}icon={<FaFacebookSquare />}
          />
          <GlobalLink
            customClassLink={"link-footer-IE"}
            icon={<MdOutlineEmail />}
          />
        </div>
      </div>
    </>
  );
}
