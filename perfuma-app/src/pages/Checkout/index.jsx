import React from "react";
import FormInput from "./FormInput";
import ListProductCheckout from "./ListProductCheckout";

function Checkout() {
  return (
    <div id="checkout">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3 pb-4">
            <li className="breadcrumb-item">
              <a href="./index.html">Trang chủ</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Thông tin sản phẩm
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Thanh toán
            </li>
          </ol>
        </nav>
        <div className="row layout-checkout">
        <FormInput />
        <ListProductCheckout />
      </div>
      </div>
      
    </div>
  );
}

export default Checkout;
