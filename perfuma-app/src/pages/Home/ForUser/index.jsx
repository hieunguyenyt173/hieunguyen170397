import React, { useContext } from 'react'
import Context from '../../../context/Context'
import ListProductUser from './ListProductUser'
import banneruser from '../../../assets/img/banner-sale.png'
import { Link } from 'react-router-dom'
function ForUser() {
    const { userProduct} = useContext(Context)
  return (
    <div id="sale-for-user">
    <div className="container">

      <div className="row">
        <div className="col text-center mt-5">
          <h3 className="text-uppercase fs-4">Dành riêng cho bạn</h3>
          <p className="">Đăng nhập ngay để nhận những ưu đãi chỉ dành cho thành viên</p>
          <Link to="/login">
          <button type="button" className="btn btn-dark mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng
            nhập ngay
          </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 mb-3">
          <a href="./sale.html">
            <div className="banner-sale-user">
              <img src={banneruser} alt="banner-sale-user"/>
            </div>
          </a>
        </div>
        <div className="col-lg-7 product-user">
          <div className="row list-product-user">
            <ListProductUser listproduct={userProduct}/>
          </div>

        </div>
      </div>
      <a href="./sale.html">
        <div className="btn-more text-center mt-2">Xem thêm <span className="icon-more"><i
              className="fa-solid fa-angles-right"></i></span>
        </div>
      </a>
    </div>
  </div>
  )
}

export default ForUser