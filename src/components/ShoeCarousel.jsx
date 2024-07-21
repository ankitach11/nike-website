import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoeData from "./product.json";
import shoeImage from "./images/shoe.jpg";

const ShoeCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change slides every 2 seconds
  };

  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      <Slider {...settings}>
        {shoeData.shoes.map((shoe, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-item">
              <img
                src={shoeImage}
                alt={"shoe"}
                style={{ width: "500px", height: "500px" }}
              />
              <p>{"Demo"}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShoeCarousel;
