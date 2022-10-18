import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header-bar">
            <div className="row">
              <div className="col-sm-4 d-flex align-items-center">
                <div className="seach-form d-flex align-items-center rounded shadow-sm pe-3">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    className="form-control border-0 seach-form-input"
                  />

                  <span className="text-black-50 seach-form-button ps-2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>
              <div className="col-sm-4 d-flex align-items-center justify-content-center">
                <Link to="/">
                  <div className="logo text-decoration-underline">Perfuma</div>
                </Link>
              </div>
              <div className="col-sm-4">
                <div className="navbar-icon align-items-center justify-content-end">
                  <p className="hello mb-0 hide">Xin chào, Khách</p>
                  <div className="icon fs-4">
                    <Link to="/login" className="icon-header">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                    <Link to="/san-pham-yeu-thich" className="icon-header">
                      <i className="fa-solid fa-heart"></i>
                    </Link>

                    <Link to="gio-hang" className="icon-header">
                      <div className="bag">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <p className="amount">0</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item mx-2  ">
                    <NavLink class="nav-link active" aria-current="page" to="/">
                      TRANG CHỦ
                    </NavLink>
                  </li>
                  
                  <li class="nav-item mx-2  dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      to="/san-pham"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SẢN PHẨM
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" to="/nuoc-hoa-nam">
                          Nước hoa nam
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="nuoc-hoa-nu">
                          Nước hoa nữ
                        </Link>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <Link class="dropdown-item" to="/bo-qua-tang">
                          Bộ quà tặng
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mx-2 ">
                    <NavLink class="nav-link" to="/khuyen-mai">
                      KHUYẾN MÃI
                    </NavLink>
                  </li>
                  <li class="nav-item mx-2 ">
                    <NavLink class="nav-link" to="/tin-tuc">
                      TIN TỨC
                    </NavLink>
                  </li>
                  <li class="nav-item mx-2 ">
                    <NavLink class="nav-link" to="/lien-he">
                      LIÊN HỆ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <div className="main-menu">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="subnav">
            <Link to="/" className="menu-item"><span className="active">TRANG CHỦ</span></Link>
            <Link to="/nuoc-hoa-nam" className="menu-item">NƯỚC HOA NAM
            </Link>
            <Link to="/nuoc-hoa-nu" className="menu-item">NƯỚC HOA NỮ
            </Link>
            <Link to="khuyen-mai" className="menu-item">KHUYẾN MÃI</Link>
            <Link to="tin-tuc" className="menu-item">TIN TỨC</Link>
            <Link to="lien-he" className="menu-item">LIÊN HỆ</Link>
            <div className="subnav-tablet">
              <Link to="nuoc-hoa-nam" className="menu-item-tablet">NƯỚC HOA NAM</Link>
              <Link to="nuoc-hoa-nu" className="menu-item-tablet">NƯỚC HOA NỮ</Link>
              <Link to="khuyen-mai" className="menu-item-tablet">KHUYẾN MÃI</Link>
              <span className="menu-bar fs-5 text-white"><i className="fa-solid fa-bars"></i></span>
            </div>
          </div>

        </div>

      </div>
     
      <div className="sidebar">
        <div className="row mx-0 ">
          <div className="col sidebar-menu px-3 d-flex justify-content-between align-items-center ">
            <p className="my-3">MENU</p>
            <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col px-3 menu-men d-flex justify-content-between align-items-center border-bottom">
            <p className="my-3">Nước hoa nam</p>
            <span className="next-icon"><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col px-3 menu-women d-flex justify-content-between align-items-center border-bottom">
            <p className="my-3">Nước hoa nữ</p>
            <span className="next-icon"><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col px-3 d-flex justify-content-between align-items-center border-bottom">
            <p className="my-3">Khuyến mãi</p>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col px-3 border-bottom">
            <p className="my-3">Tin tức</p>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col px-3 border-bottom">
            <p className="my-3">Liên hệ</p>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col">
            <div className="sidebar-login d-flex justify-content-center align-items-center mt-3 mx-3">
              <span className="user pe-2"> <i className="fa-solid fa-user"></i></span>
              <p className="my-3">Đăng nhập/ Đăng kí</p>
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col">
            <div className="sidebar-like d-flex justify-content-center align-items-center my-3 mx-3">
              <p className="my-3">Sản phẩm yêu thích</p>
            </div>
          </div>
        </div>

      </div>

    </div>
    
    <div className="sidebar-men">
      <div className="row mx-0 ">
        <div className="col sidebar-menu px-3 d-flex justify-content-between align-items-center ">
          <div className="menu-back d-flex align-items-center">
            <span className="btn-back-icon me-2"><i className="fa-solid fa-angle-left"></i></span>
            <p className="my-3">NƯỚC HOA NAM</p>
          </div>

          <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 brand-menu d-flex justify-content-between align-items-center border-bottom">
          <p className="my-3">Nhãn hiệu</p>
          <span className="next-icon brand-menu"><i className="fa-solid fa-chevron-right"></i></span>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/sp-ban-chay.png" alt="sp-ban-chay"/>
            </div>

            <p className="item-sidebar-men">Sản phẩm bán chạy</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">

          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/dang-sale.png" alt="dang-sale"/>
            </div>

            <p className="item-sidebar-men">Đang khuyến mãi</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/bo-qua-tang.png" alt="bo-qua-tang"/>
            </div>

            <p className="item-sidebar-men pb-4">Bộ quà tặng</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/all-sp.png" alt="all-sp"/>
            </div>

            <p className="item-sidebar-men">Tất cả sản phẩm</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>

    </div>
    
    <div className="sidebar-brand">
      <div className="row mx-0 ">
        <div className="col sidebar-menu px-3 d-flex justify-content-between align-items-center ">
          <div className="menu-back d-flex align-items-center">
            <span className="btn-back-icon-1 me-2"><i className="fa-solid fa-angle-left"></i></span>
            <p className="my-3">NHÃN HIỆU</p>
          </div>
          <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Azzaro</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Burberry</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Calvin Klein</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Carolina Herrera</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Davidoff</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Ralph Lauren</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Sean John</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Thierry Mugler</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Tom Ford</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Vince Camuto</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Issey Miyake</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Jean Paul Gaultier</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Kenneth Cole</p>
        </div>
      </div>

      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Lacoste</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Dolce Gabbana</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Gianni Versace</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Giorgio Armani</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Givenchy</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Gucci</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Hugo Boss</p>
        </div>
      </div>
    </div>
    
    <div className="sidebar-women">
      <div className="row mx-0 ">
        <div className="col sidebar-menu px-3 d-flex justify-content-between align-items-center ">
          <div className="menu-back d-flex align-items-center">
            <span className="btn-back-icon me-2"><i className="fa-solid fa-angle-left"></i></span>
            <p className="my-3">NƯỚC HOA NỮ</p>
          </div>

          <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 brand-menu d-flex justify-content-between align-items-center border-bottom">
          <p className="my-3">Nhãn hiệu</p>
          <span className="next-icon"><i className="fa-solid fa-chevron-right"></i></span>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/sp-banchay-nu.webp" alt="sp-ban-chay"/>
            </div>

            <p className="item-sidebar-men">Sản phẩm bán chạy</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">

          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/dang-sale-nu.webp" alt="dang-sale"/>
            </div>

            <p className="item-sidebar-men">Đang khuyến mãi</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/bo-quatang-nu.webp" alt="bo-qua-tang"/>
            </div>

            <p className="item-sidebar-men pb-4">Bộ quà tặng</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>
      <div className="row my-3 mx-4">
        <div className="col">
          <div className="item-men">
            <div className="img-item-men">
              <img src="./img/all-sp-nu.webp" alt="all-sp"/>
            </div>

            <p className="item-sidebar-men">Tất cả sản phẩm</p>
            <span className="more fs-4"><i className="fa-solid fa-circle-arrow-right"></i></span>

          </div>
        </div>
      </div>

    </div>
    
    <div className="sidebar-brand-women">
      <div className="row mx-0 ">
        <div className="col sidebar-menu px-3 d-flex justify-content-between align-items-center ">
          <div className="menu-back d-flex align-items-center">
            <span className="btn-back-icon-1 me-2"><i className="fa-solid fa-angle-left"></i></span>
            <p className="my-3">NHÃN HIỆU</p>
          </div>
          <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Burberry</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Bvlgari</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Calvin Klein</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Clinique</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Davidoff</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Dolce Gabbana</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Elizabeth Taylor</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Estee Lauder</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Gianni Versace</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Giorgio Armani</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Givenchy</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Gucci</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Hugo Boss</p>
        </div>
      </div>

      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Jessica Simpson</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Kenneth Cole</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Lacoste</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Marc Jacobs</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Paris Hilton</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Ralph Lauren</p>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col px-3 border-bottom">
          <p className="my-3">Thierry Mugler</p>
        </div>
      </div>
    </div>

  </div> */}
    </div>
  );
}

export default Header;
