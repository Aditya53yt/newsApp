import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousal = () => {
  
  const customStyle = {
    height: "70vh",
   width:'20wh'
  
  };
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
     
    };
    return (
      <Slider {...settings}>
        <div>
        <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
           style={customStyle}
           
          />
        </div>
        <div>
        <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        <div>
        <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
      
      </Slider>
    );
 
};

export default Carousal;
