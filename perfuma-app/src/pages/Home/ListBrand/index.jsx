import React from "react";
import Slider from "react-slick";
import brand1 from "../../../assets/img/brand-item/Azzardo.webp"
import brand2 from "../../../assets/img/brand-item/blvgari_logo.webp"
import brand3 from "../../../assets/img/brand-item/Burberry_Brand_Logo.webp"
import brand4 from "../../../assets/img/brand-item/Calvin_Klein_Brand_Logo.webp"
import brand5 from "../../../assets/img/brand-item/Carolina_Herrera_Brand_Logo.webp"
import brand6 from "../../../assets/img/brand-item/dolce_gabbana.webp"
import brand7 from "../../../assets/img/brand-item/Giorgio_Armani_Brand_Logo.webp"
import brand8 from "../../../assets/img/brand-item/Gucci_Brand_Logo.webp"
import brand9 from "../../../assets/img/brand-item/Kenneth_Cole_Brand_Logo.webp"
import brand10 from "../../../assets/img/brand-item/Marc_Jacobs_Logo.webp"
import brand11 from "../../../assets/img/brand-item/Ralph_Lauren_Logo.webp"
function ListBrand() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div id="slider">
        <div className="container">
          <h3 className="heading text-uppercase text-center mt-4 mb-4">
            Những thương hiệu hàng đầu
          </h3>
          <Slider {...settings}>
            <div className="item-brand">
              <img src={brand1} alt="brand1" />
            </div>
            <div className="item-brand">
              <img src={brand2} alt="brand2" />
            </div>
            <div className="item-brand">
              <img
                src={brand3}
                alt="brand3"
              />
            </div>
            <div className="item-brand">
              <img
                src={brand4}
                alt="brand4"
              />
            </div>
            <div className="item-brand">
              <img
                src={brand5}
                alt="brand5"
              />
            </div>
            <div className="item-brand">
              <img src={brand6} alt="" />
            </div>
            <div className="item-brand">
              <img
                src={brand7}
                alt="brand6"
              />
            </div>
            <div className="item-brand">
              <img src={brand8} alt="brand7" />
            </div>
            <div className="item-brand">
              <img
                src={brand9}
                alt="brand8"
              />
            </div>
            <div className="item-brand">
              <img src={brand10} alt="brand9" />
            </div>
            <div className="item-brand">
              <img
                src={brand11}
                alt="brand10"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ListBrand;
