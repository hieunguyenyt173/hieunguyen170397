import React from "react";
import WishlistItem from "./WislistItem";

function Whistlist() {
  return (
    <div id="favorite">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3 pb-4">
            <li className="breadcrumb-item">
              <a href="./index.html">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sản phẩm yêu thích
            </li>
          </ol>
        </nav>
        <WishlistItem />
      </div>
    </div>
  );
}

export default Whistlist;
