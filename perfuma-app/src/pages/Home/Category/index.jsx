import React from 'react'
import categorymen from '../../../assets/img/Men.webp'
import categorywomen from '../../../assets/img/Women.webp'
import {Link} from 'react-router-dom'
function Category() {
  return (
    <div id="category-popular">
    <div className="container">
      <div className="row">
        <h3 className="title-popular text-center text-uppercase fs-4 mt-5">Các danh mục phổ biến</h3>
        <div className="col-12 col-md-6 col-sm-12 mt-4">
          <Link to="/nuoc-hoa-nu">
            <div className="gender-image">
              <img src={categorywomen} alt="categorymen"/>
            </div>
          </Link>
          <div className="row">
            <div className="col text-center">
              <a href="./product-women.html">
                <div className="popular-item">Tất cả nước hoa nữ</div>
              </a>
            </div>
            <div className="col">
              <a href="./best-seller-women.html">
                <div className="popular-item">Bán chạy</div>
              </a>
            </div>
            <div className="col">
              <a href="./gift-women.html">
                <div className="popular-item">Bộ quà tặng</div>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-sm-12 mt-4">
            <Link to="nuoc-hoa-nam">
              <div className="gender-image">
                <img src={categorymen} alt="categorymen"/>
              </div>
            </Link>
            <div className="row">
              <div className="col text-center">
                <a href="./product.html">
                  <div className="popular-item">Tất cả nước hoa nam</div>
                </a>
              </div>
              <div className="col">
                <a href="./best-seller-men.html">
                  <div className="popular-item">Bán chạy</div>
                </a>
              </div>
              <div className="col">
                <a href="./gift-men.html">
                  <div className="popular-item">Bộ quà tặng</div>
                </a>
              </div>
            </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Category