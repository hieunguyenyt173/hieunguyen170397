import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../../assets/img/banner.webp"
import banner2 from "../../../assets/img/banner2.webp"
import banner3 from "../../../assets/img/banner3.webp"
import { Link } from "react-router-dom";

function Banner() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  };
  return (
    <div id="banner">
      <div className="container">
        <Slider {...settings}>
        <Link to="/khuyen-mai">
          <img className="banner" src={banner} alt="banner" />
        </Link>
        <Link to="/khuyen-mai">
          <img className="banner" src={banner2} alt="banner" />
        </Link>
        <Link to="/khuyen-mai">
          <img className="banner" src={banner3} alt="banner" />
        </Link>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
