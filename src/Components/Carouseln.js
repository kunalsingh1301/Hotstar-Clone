import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Styles/Carousel.css'
import img1 from '../Assets/slider-badag.jpg'
import img2 from '../Assets/slider-badging.jpg'

const Carouseln = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };

  return (
    <Slider className='slider' {...settings}>
        <div>
            <img className='img-car' src={img1} alt ='a'/>   
        </div>
        <div>
            <img className='img-car' src={img2} alt =''/>   
        </div>
    </Slider>
  )
}

export default Carouseln