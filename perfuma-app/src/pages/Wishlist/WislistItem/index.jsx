import React from 'react'

function WishlistItem() {
  return (
    <>
     <div class="row title-favorite text-uppercase d-flex justify-content-between">
            <p class="col-md-3 text-center">Hình ảnh</p>
            <p class="col-md-3 text-center">Tên sản phẩm</p>
            <p class="col-md-2 text-center">Giá</p>
            <p class="col-md-1 text-center">Xóa</p>
            <p class="col-md-3 text-center">Thêm vào giỏ hàng</p>
        </div>
        <div class="row item-favorite justify-content-center align-items-center mb-4">
            <div class="col-md-3 col-sm-4 image-favorite">
                <img src="./img/img-favorite.png" alt="san pham yeu thich"/>
            </div>
            <div class="col-md-3 col-sm-8 info-favorite ps-2">
                <p class="text-uppercase brand-name-favorite">GIORGIO ARMANI</p>
                <p class="product-name">Acqua Di Gio For Women By Giorgio Armani Eau De Toilette Spray</p>
                <div class="rating d-flex">
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <p class="number-rating ms-1">4.8</p>
                </div>
            </div>
            <div class="col-md-2 product-price d-sm-flex flex-md-column justify-content-sm-center">
                <p class="text-center px-3">2.390.000₫</p>
                <p class="text-decoration-line-through text-center px-3">4.125.000₫</p>
            </div>
            <div class="col-md-1 btn-delete text-center">
                <span class="delete-icon fs-3 d-sm-none d-md-block"><i class="fa-solid fa-square-xmark"></i></span>
                <div class="col-md-3 btn-delete-product d-sm-block d-md-none">
                    <p class="text-uppercase text-white py-2 text-center mx-3">Xóa sản phẩm</p>
                </div>
            </div>
            <div type="button" class="col-md-3 btn-add-tocart mb-sm-3 mb-md-0">
                <p class="text-uppercase text-white py-2 text-center mx-3">Thêm vào giỏ hàng</p>
            </div>
        </div>
        <div class="row item-favorite justify-content-center align-items-center mb-4">
            <div class="col-md-3 col-sm-4 image-favorite">
                <img src="./img/img-favorite.png" alt="san pham yeu thich"/>
            </div>
            <div class="col-md-3 col-sm-8 info-favorite ps-2">
                <p class="text-uppercase brand-name-favorite">GIORGIO ARMANI</p>
                <p class="product-name">Acqua Di Gio For Women By Giorgio Armani Eau De Toilette Spray</p>
                <div class="rating d-flex">
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <p class="number-rating ms-1">4.8</p>
                </div>
            </div>
            <div class="col-md-2 product-price d-sm-flex flex-md-column justify-content-sm-center">
                <p class="text-center px-3">2.390.000₫</p>
                <p class="text-decoration-line-through text-center px-3">4.125.000₫</p>
            </div>
            <div class="col-md-1 btn-delete text-center">
                <span class="delete-icon fs-3 d-sm-none d-md-block"><i class="fa-solid fa-square-xmark"></i></span>
                <div class="col-md-3 btn-delete-product d-sm-block d-md-none">
                    <p class="text-uppercase text-white py-2 text-center mx-3">Xóa sản phẩm</p>
                </div>
            </div>
            <div class="col-md-3 btn-add-tocart mb-sm-3 mb-md-0">
                <p class="text-uppercase text-white py-2 text-center mx-3">Thêm vào giỏ hàng</p>
            </div>
        </div>
        <div class="row item-favorite justify-content-center align-items-center mb-4">
            <div class="col-md-3 col-sm-4 image-favorite">
                <img src="./img/img-favorite.png" alt="san pham yeu thich"/>
            </div>
            <div class="col-md-3 col-sm-8 info-favorite ps-2">
                <p class="text-uppercase brand-name-favorite">GIORGIO ARMANI</p>
                <p class="product-name">Acqua Di Gio For Women By Giorgio Armani Eau De Toilette Spray</p>
                <div class="rating d-flex">
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <span class="star-icon"><i class="fa-solid fa-star"></i></span>
                    <p class="number-rating ms-1">4.8</p>
                </div>
            </div>
            <div class="col-md-2 product-price d-sm-flex flex-md-column justify-content-sm-center">
                <p class="text-center px-3">2.390.000₫</p>
                <p class="text-decoration-line-through text-center px-3">4.125.000₫</p>
            </div>
            <div class="col-md-1 btn-delete text-center">
                <span class="delete-icon fs-3 d-sm-none d-md-block"><i class="fa-solid fa-square-xmark"></i></span>
                <div class="col-md-3 btn-delete-product d-sm-block d-md-none">
                    <p class="text-uppercase text-white py-2 text-center mx-3">Xóa sản phẩm</p>
                </div>
            </div>
            <div class="col-md-3 btn-add-tocart mb-sm-3 mb-md-0">
                <p class="text-uppercase text-white py-2 text-center mx-3">Thêm vào giỏ hàng</p>
            </div>
        </div>
    </>
  )
}

export default WishlistItem