import React from "react";
import { formatMoney } from "../../utils/utils";
function ProductItem(props) {
  const { imageproduct, sale_title, brandname, price, name } = props.product;
  return (
    <div className="item shadow mb-3 bg-body rounded mx-2">
      <div className="row">
        <div className="col">
          <div className="image-product">
            <img src={imageproduct} alt="anh san pham" />
            <div
              className="btn-view mx-auto d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#quickview-modal"
            >
              <p className="my-0">Thêm vào giỏ</p>
            </div>
            {sale_title > 0 ? (
              <div className="saleoff d-flex align-item-center text-white text-center">
                <p className="">Sale {sale_title * 100}%</p>
              </div>
            ) : (
              ""
            )}

            <div className="like">
              <span className="like-icon fs-4">
                <i className="fa-solid fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <a href="./product-details.html?id=${p.id}">
          <div className="col">
            <div className="product-info d-flex flex-column justify-content-between">
              <p className="product-brand mb-1">{brandname}</p>
              <p className="product-name mb-1">{name}</p>
              <div className="product-price d-flex justify-content-between">
                <p className="price-sale">
                  {formatMoney(price - price * sale_title)}
                </p>
                <p className="price text-decoration-line-through">
                  {formatMoney(price)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
