import React, {useEffect} from "react";

import "@fancyapps/ui/dist/fancybox.css";
import Rating from "./Rating";
function ProductDetail() {
  return (
    <>
    <div className="product-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="./index.html">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
         
          <div
              id="mainCarousel"
              className="carousel w-10/12 max-w-5xl mx-auto"
            >
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/1/900x600"
                data-fancybox="gallery"
                data-caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit."
              >
                <img src="https://lipsum.app/id/1/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/2/900x600"
                data-fancybox="gallery"
                data-caption="Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris"
              >
                <img src="https://lipsum.app/id/2/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/3/900x600"
                data-fancybox="gallery"
                data-caption="Hello 🖐"
              >
                <img src="https://lipsum.app/id/3/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/4/900x600"
                data-fancybox="gallery"
                data-caption="Another caption"
              >
                <img src="https://lipsum.app/id/4/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/5/900x600"
                data-fancybox="gallery"
              >
                <img data-lazy-src="https://lipsum.app/id/5/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/6/900x600"
                data-fancybox="gallery"
              >
                <img src="https://lipsum.app/id/6/600x400" />
              </div>
              <div
                className="carousel__slide"
                data-src="https://lipsum.app/id/7/900x600"
                data-fancybox="gallery"
              >
                <img src="https://lipsum.app/id/7/600x400" />
              </div>
            </div>
          
            

            <div id="thumbCarousel" className="carousel max-w-xl mx-auto">
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/1/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/2/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/3/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/4/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/5/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/6/100x100"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="panzoom__content"
                  src="https://lipsum.app/id/7/100x100"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div id="detail">
              <div className="brand-rating d-flex">
                <p className="brand-name">AZZARO</p>
                <ul className="rating d-flex">
                  <li className="star">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </li>
                  <li className="star">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </li>
                  <li className="star">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </li>
                  <li className="star">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </li>
                  <li className="star">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </li>
                </ul>
                <p className="rating-number ps-2">4.8</p>
              </div>
              <p className="product-name fs-3">
                Azzaro For Men By Azzaro Eau De Toilette Spray
              </p>
              <div className="price-info d-flex justify-content-between">
                <div className="d-flex">
                  <p className="product-price text-danger fs-4 fw-bold mb-4 pe-3">
                    500,000đ
                  </p>
                  <p className="product-sale text-danger fs-4 fw-bold mb-4 text-decoration-line-through">
                    750,000đ
                  </p>
                </div>
                <p>
                  Tình trạng :{" "}
                  <span className="text-danger status">Còn hàng</span>
                </p>
              </div>
              <p>Dung tích</p>
              <div className="product-size mb-4">
                <div className="size d-flex">
                  <p className="border py-2 px-3 border-dark me-2">30ml</p>
                  <p className="border py-2 px-3 border-dark me-2">50ml</p>
                  <p className="border py-2 px-3 border-dark me-2">100ml</p>
                  <p className="border py-2 px-3 border-dark me-2">10ml</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <span className="border d-inline-block me-3">
                  <span className="py-2 px-3 d-inline-block fw-bold btn-minus-count">
                    -
                  </span>
                  <span className="py-2 px-3 d-inline-block fw-bold count">
                    1
                  </span>
                  <span className="py-2 px-3 d-inline-block fw-bold btn-plus-count">
                    +
                  </span>
                </span>

                <p className="btn btn-dark py-2 rounded-0 mb-0">Số lượng</p>
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <button className="btn btn-danger py-2 rounded-0 btn-add-to-cart text-uppercase mx-3">
                  Thêm vào giỏ hàng
                </button>
                <a href="./checkout.html">
                  <button className="btn btn-dark py-2 rounded-0 text-uppercase mx-3">
                    Tiến hành thanh toán
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-description border-bottom border-top"></div>
          <div className="row">
            <div className="col-md-6 py-3">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Chính sách đổi trả và bảo hành
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-uppercase fw-bold">BẢO HÀNH ĐỔI TRẢ</p>
                      <p>Sản Phẩm Được Đổi Trả 30 Ngày Không Cần Lý Do</p>
                      <p>Sản Phẩm Được Bảo Hành Trọn Đời Về Mùi Hương </p>
                      <p>
                        Sản phẩm Được Đổi Trả là sản phẩm nước hoa có nắp xịt
                        (Không đổi trả với sản phẩm mini - không có nắp xịt)
                      </p>
                      <p className="text-uppercase fw-bold">
                        ĐIỀU KIỆN BẢO HÀNH
                      </p>
                      <p>
                        Sản phẩm còn phải có đầy đủ tem, hộp của nhà sản xuất &
                        và tem bảo hành
                      </p>
                      <p>Quý khách còn phải giữ đầy đủ hóa đơn mua hàng</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Hướng dẫn sử dụng và bảo quản
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-uppercase fw-bold">
                        Cách sử dụng nước hoa
                      </p>
                      <ul>
                        <li>
                          Xịt nước hoa khi cơ thể sạch, khô, hoặc sau khi thoa
                          dưỡng ẩm để giữ mùi lâu hơn
                        </li>
                        <li>
                          Giữ chai xịt cách cơ thể khoảng 12cm đến 15cm và hướng
                          đầu vòi xịt về mình. Nếu nước hoa làm ướt da thì nghĩa
                          là bạn đang xịt ở khoảng cách quá gần. Chờ "điểm mạch"
                          khô tự nhiên mà không chà xát(thói quen này làm bay
                          mùi và biến mùi nước hoa)
                        </li>
                        <li>
                          Xịt nước hoa vào các điểm mạch đập(cổ, ngực, các điểm
                          mạch, cẳng tay hoặc khuỷu tay): đây là những vùng có
                          mạch máu nằm gần bề mặt da. Các điểm này ấm hơn những
                          nơi khác, hơi ấm giúp khuếch tán mùi hương tốt.
                        </li>
                        <li>
                          Nước hoa ban đêm thường được xịt lên cổ hoặc gần vùng
                          cổ. Lý do là vì hương nước hoa ban đêm không lưu lại
                          lâu
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p className="tite text-uppercase text-center mb-3">
                Chi tiết sản phẩm
              </p>
              <p className="product-desc">
                Nước hoa CHROME được AZZARO tung ra vào năm 1996. AZZARO CHROME
                là một hương thơm nam tính say đắm với cam bergamot, hoa oải
                hương và gừng. Được làm giàu với bạch đậu khấu, gỗ đàn hương, gỗ
                hồng sắc, cây thường xuân, gỗ sồi và dầu hoa cam, loại nước hoa
                này chắc chắn sẽ đánh lừa các giác quan. Kết hợp AZZARO CHROME
                với sau cạo râu để có mùi hương lâu dài. Hương thơm này được
                khuyến khích sử dụng vào ban ngày.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Rating />
    </>
  );
}

export default ProductDetail;
