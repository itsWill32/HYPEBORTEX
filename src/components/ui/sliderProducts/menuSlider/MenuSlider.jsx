import React from 'react'
import SliderIcon from '../../../../assets/img/btnSlider.png'
import './MenuSlider.css'


export default function MenuSlider() {
  return (
    <>
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
    </>
  )
}
