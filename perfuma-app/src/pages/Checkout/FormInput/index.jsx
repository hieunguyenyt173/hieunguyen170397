import React from "react";
import {Link} from "react-router-dom"
function FormInput() {
  return (
    <div className="col-md-6">
      <p className="text-uppercase title-checkout">Thông tin thanh toán</p>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="Name"
        />
        <label htmlFor="floatingName">Họ và tên</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control"
          id="floatingPhone"
          placeholder="Phone"
        />
        <label htmlFor="floatingPhone">Số điện thoại</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingAddress"
          placeholder="Address"
        />
        <label htmlFor="floatingAddress">Địa chỉ(tùy chọn)</label>
      </div>
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Lựa chọn tỉnh thành</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Tỉnh thành</label>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Lựa chọn quận,huyện</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Quận, huyện</label>
          </div>
        </div>
      </div>
      <div className="form-floating mb-5 mt-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label htmlFor="floatingTextarea2">Ghi chú</label>
      </div>
      <p className="text-uppercase title-checkout">Phương thức thanh toán</p>
      <div className="form-payment mb-3">
        <div className="form-check mb-3 mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label d-flex justify-content-between d-flex justify-content-between"
            htmlFor="flexRadioDefault1"
          >
            OnePay - Thanh toán online qua thẻ nội địa (ATM)
            <div className="img-payment">
              <img src="./img/checkout-img.png" alt="" />
            </div>
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label d-flex justify-content-between"
            htmlFor="flexRadioDefault1"
          >
            OnePay - Thanh toán online qua thẻ quốc tế (Visa/Master Card)
            <div className="img-payment">
              <img src="./img/checkout-img.png" alt="" />
            </div>
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label d-flex justify-content-between"
            htmlFor="flexRadioDefault1"
          >
            Thanh toán qua Ví điện tử MoMo
            <div className="img-payment">
              <img src="./img/momo.png" alt="" />
            </div>
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label d-flex justify-content-between"
            htmlFor="flexRadioDefault1"
          >
            Thanh toán khi giao hàng (COD)
            <span className="bill-icon">
              <i className="fa-solid fa-money-bill-1"></i>
            </span>
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label d-flex justify-content-between"
            htmlFor="flexRadioDefault1"
          >
            Thanh toán qua VNPAY-QR
            <div className="img-payment">
              <img src="./img/vnpay.png" alt="" />
            </div>
          </label>
        </div>
      </div>

      <div className="shopping-continue d-flex justify-content-between mb-5">
        <p className="btn-backtocart">
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>{" "}
          Trở lại giỏ hàng
        </p>
        <Link to="/">
        <button type="button" className="btn btn-danger">
          Tiếp tục mua hàng
        </button>
        </Link>
      </div>
    </div>
  );
}

export default FormInput;
