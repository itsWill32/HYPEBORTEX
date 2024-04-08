import React from "react";
import "./SliderProducts.css";
import CardItems from "../cardItems/CardIterms";
import SliderIcon from "../../../assets/img/btnSlider.png";
import Producto1 from "../../../assets/img/NikeMag.png";

export default function SliderProducts() {
  return (
    <>
      <div className="container">
        <ul class="menu-slider">
          <li>
            <a href="#slide1">
              <img src={SliderIcon} alt="select-slide" />
            </a>
          </li>
          <li>
            <a href="#slide2">
              <img src={SliderIcon} alt="select-slide" />
            </a>
          </li>
          <li>
            <a href="#slide3">
              <img src={SliderIcon} alt="select-slide" />
            </a>
          </li>
        </ul>

        <ul id="slider">
          <li id="slide1">
            <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,790"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
          </li>
          <li id="slide2">
            <CardItems price={"$416,890"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,890"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,890"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,890"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />           
          </li>
          <li id="slide3">
            <CardItems price={"$416,990"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,990"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,990"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
            <CardItems price={"$416,990"} description={"NIKE MAG BACK TO THE FUTURE"} stok={"SOLD"} image={Producto1} />
          </li>
        </ul>
      </div>
    </>
  );
}
