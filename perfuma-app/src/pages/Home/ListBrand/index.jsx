import React from "react";

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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
function ListBrand() {
  return (
    <div id="slider">
    <div className="container">
      <h3 className="heading text-uppercase text-center mt-4 mb-4">
            Những thương hiệu hàng đầu
      </h3>
      <Swiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        0: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="brandSwipper pb-1"
    >
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand1} alt="brand1" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand2} alt="brand2" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand3} alt="brand3" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand4} alt="brand4" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand5} alt="brand5" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand6} alt="brand6" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand7} alt="brand7" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand8} alt="brand8" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand9} alt="brand9" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand10} alt="brand10" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="item-brand">
      <img src={brand11} alt="brand11" />
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  );
  
}

export default ListBrand;
