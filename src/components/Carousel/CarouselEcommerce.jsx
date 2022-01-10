import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './CarouselEcommerce.scss'
import { Images } from '../../utils/images';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

function CarouselEcommerce() {
    return (
        <>
      <div className="carouselStyle">
        <Carousel breakPoints={breakPoints}>       
          <Item ><img src={Images.Slider02} alt="" className="carousel-image" /></Item>
          <Item><img src={Images.Slider03} alt="" className="carousel-image" /></Item>
          <Item><img src={Images.Slider01} alt="" className="carousel-image" /></Item>
        </Carousel>
      </div>
    </>
    )
}

export default CarouselEcommerce
