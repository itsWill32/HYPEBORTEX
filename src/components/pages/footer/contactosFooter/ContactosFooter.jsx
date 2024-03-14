import React from "react";
import GlobalLink from "../../../ui/link/Link";
import './ContactosFooter.css'

export default function ContactosFooter() {
  return (
    <>
      <div className="">
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
    </>
  );
}
