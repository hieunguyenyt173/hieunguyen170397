import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import ProductItem from '../ProductItem';
function ListProducts(props) {
    const { listproduct } = props.listproduct;
  return (
    <div className="list-item">
              
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
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
      modules={[Pagination]}
      className="saleSwipper"
    >
      {props.listproduct.map((product) => (
        <SwiperSlide key={product.id}>
         <ProductItem 
         
         product = {product}
         />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ListProducts