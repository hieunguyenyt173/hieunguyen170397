import React from "react";
import {Link} from 'react-router-dom'
function ShoppingCart() {
  return (
  <>
  <div id="cart">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-3">
            <li className="breadcrumb-item"><a href="./index.html">Trang chủ</a></li>
            <li className="breadcrumb-item active" aria-current="page">
              Giỏ hàng của bạn
            </li>
          </ol>
        </nav>
        <p className="heading-cart text-uppercase">Giỏ hàng của bạn (<span>2</span> sản phẩm)</p>
        <div className="row ">
          <div className="col-md-8 col-sm-12">
            <div className="item-cart">
              <div className="row">
                <div className="menu-item-cart d-flex justify-content-between align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="image-item-cart">
                      <img src="./img/img-favorite.png" alt="image-item-cart" />
                  </div>
                </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="info d-lg-flex d-md-block align-items-center">
                      <div className="item-cart-info">
                        <p className="text-uppercase brand-name pt-3">
                          GIORGIO ARMANI
                        </p>
                        <p className="product-name">
                          Acqua Di Gio For Women By Giorgio Armani Eau De Toilette
                          Spray
                        </p>
                        <p className="capacity">50ml</p>
                      </div>
                      <div className="price-cart-item d-md-flex d-lg-block">
                        <p className="">2.390.000₫</p>
                        <p className="text-decoration-line-through">4.125.000₫</p>
                      </div>
                      <div className="product-amount d-flex align-items-center justify-content-center">
                        <div
                          className="btn-up d-flex justify-content-center align-items-center"
                        >
                          +
                        </div>
                        <p className="amount-product px-3 mb-0">12</p>
                        <div
                          className="btn-down d-flex justify-content-center align-items-center"
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 d-flex justify-content-center align-items-center">
                    <div className="btn-close"></div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="item-cart">
              <div className="row">
                <div className="menu-item-cart d-flex justify-content-between align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="image-item-cart">
                      <img src="./img/img-favorite.png" alt="image-item-cart" />
                  </div>
                </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="info d-lg-flex d-md-block align-items-center">
                      <div className="item-cart-info">
                        <p className="text-uppercase brand-name pt-3">
                          GIORGIO ARMANI
                        </p>
                        <p className="product-name">
                          Acqua Di Gio For Women By Giorgio Armani Eau De Toilette
                          Spray
                        </p>
                        <p className="capacity">50ml</p>
                      </div>
                      <div className="price-cart-item d-md-flex d-lg-block">
                        <p className="">2.390.000₫</p>
                        <p className="text-decoration-line-through">4.125.000₫</p>
                      </div>
                      <div className="product-amount d-flex align-items-center justify-content-center">
                        <div
                          className="btn-up d-flex justify-content-center align-items-center">
                          +
                        </div>
                        <p className="amount-product px-3 mb-0">12</p>
                        <div className="btn-down d-flex justify-content-center align-items-center">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 d-flex justify-content-center align-items-center">
                    <div className="btn-close"></div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="item-cart">
              <div className="row">
                <div className="menu-item-cart d-flex justify-content-between align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="image-item-cart">
                      <img src="./img/img-favorite.png" alt="image-item-cart" />
                  </div>
                </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="info d-lg-flex d-md-block align-items-center">
                      <div className="item-cart-info">
                        <p className="text-uppercase brand-name pt-3">
                          GIORGIO ARMANI
                        </p>
                        <p className="product-name">
                          Acqua Di Gio For Women By Giorgio Armani Eau De Toilette
                          Spray
                        </p>
                        <p className="capacity">50ml</p>
                      </div>
                      <div className="price-cart-item d-md-flex d-lg-block">
                        <p className="">2.390.000₫</p>
                        <p className="text-decoration-line-through">4.125.000₫</p>
                      </div>
                      <div className="product-amount d-flex align-items-center justify-content-center">
                        <div
                          className="btn-up d-flex justify-content-center align-items-center"
                        >
                          +
                        </div>
                        <p className="amount-product px-3 mb-0">1</p>
                        <div
                          className="btn-down d-flex justify-content-center align-items-center"
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 d-flex justify-content-center align-items-center">
                    <div className="btn-close"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="menu-pay">
              <p className="oder text-uppercase mb-4">Đặt hàng</p>
              <div className="total-product d-flex justify-content-between">
                <p>Tổng sản phẩm</p>
                <p className="price-desc">3</p>
              </div>
              <div className="sub-total d-flex justify-content-between">
                <p>Tạm tính</p>
                <p className="price-desc">6.380.000₫</p>
              </div>
              <div className="shipping d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p className="price-desc">0₫</p>
              </div>
              <p className="ship-title text-center py-4">Bạn đủ điều kiện được giao hàng miễn phí</p>
              <div className="total d-flex justify-content-between pb-4">
                <p className="total-price text-uppercase">Thành tiền</p>
                <p className="price-desc">6.380.000₫</p>
              </div>
              <Link to="/thanh-toan">
                <div className="btn-pay px-2 py-3 mb-3 text-center">Tiến hành thanh toán</div>
              </Link>
              <a href="./index.html"><div className="btn-continue px-2 py-3 text-center">Tiếp tục mua hàng</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ShoppingCart;
