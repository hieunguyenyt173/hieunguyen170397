import React from "react";
import { Link } from "react-router-dom";
import Category from "../../components/Category";
import ListProductComponent from "../../components/ListProductComponent";

function ProductWomen() {
  return (
    <div id="product">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-3">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Nước hoa nữ
            </li>
          </ol>
        </nav>
        <div className="row">
          <h3 className="text-uppercase mt-md-4">Nước hoa nữ</h3>
          <Category />
          <ListProductComponent />
        </div>
      </div>
    </div>
  );
}

export default ProductWomen;
