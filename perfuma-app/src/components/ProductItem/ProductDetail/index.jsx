import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Context from "../../../context/Context";
import { formatMoney } from "../../../utils/utils";

import Rating from "./Rating";
function ProductDetail() {
  const active = {opacity: 1}
  const activeSize = {color:"#fff", backgroundColor: "#000"}
  const inActive = {};
  const [quality, setQuality] = useState(1);
  const { productId } = useParams();
  const { products } = useContext(Context);
  const {
    id,
    brandname,
    name,
    desc,
    imageproduct,
    price,
    rate,
    size,
    sale_title,
    status,
  } = products[productId - 1];
  const [selectedImg, setSelectedImg] = useState(imageproduct[0])
  const [selectedSize, setSelectedSize] = useState(0)

  const handleIncrease = () => {
    setQuality(quality + 1);
  };

  const handleReduce = () => {
    setQuality(quality - 1);

    if (quality <= 1) {
      setQuality(1);
    }
  };

    const handleClick = (index) => {
      setSelectedSize(index)
    } 

    const handleAdd = () => {
      alert("Thêm vào giỏ hàng thành công")
    }
    
  return (
    <>
      <div className="product-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4 mt-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {name}
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
                >
                  <img src={selectedImg || imageproduct[0]} alt="image-slide"/>
                </div>
              </div>

              <div
                id="thumbCarousel"
                className="carousel max-w-xl mx-auto d-flex my-3"
              >
                {imageproduct.map((i, index) => (
                  <div className="carousel__slide" 
                  style={(selectedImg === i) ? active : inActive}
                  key={index}>
                    <img className="product_thumbnail_image" 
                    
                    src={i || selectedImg} 
                    onClick={(e) => setSelectedImg(i)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <div id="detail">
                <div className="brand-rating d-flex">
                  <p className="brand-name">{brandname}</p>
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
                  <p className="rating-number ps-2">{rate}</p>
                </div>
                <p className="product-name fs-3">{name}</p>
                <div className="price-info d-flex justify-content-between">
                  <div className="d-flex">
                    <p className="product-price text-danger fs-4 fw-bold mb-4 pe-3">
                      {formatMoney(price - price * sale_title)}
                    </p>
                    <p className="product-sale text-danger fs-4 fw-bold mb-4 text-decoration-line-through">
                      {formatMoney(price)}
                    </p>
                  </div>
                  <p>
                    Tình trạng :{" "}
                    <span className="text-danger status">
                      {status ? "Còn hàng" : "Hết hàng"}
                    </span>
                  </p>
                </div>
                <p>Dung tích</p>
                <div className="product-size mb-4">
                  <div className="size d-flex">
                    {size.map((s, index) => (
                      <p
                        className="border py-2 px-3 border-dark me-2"
                        style={(selectedSize === index) ? activeSize : inActive}
                        key={index}
                        onClick={(e) => handleClick(index)}
                      >
                        {s}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <p className="py-2 rounded-0 mb-0 me-3">Số lượng</p>
                  <span className="border d-inline-block me-3" type="button">
                    <span
                      className="py-2 px-3 d-inline-block fw-bold btn-minus-count"
                      onClick={handleReduce}
                    >
                      -
                    </span>
                    <span className="py-2 px-3 d-inline-block fw-bold count">
                      {quality}
                    </span>
                    <span
                      className="py-2 px-3 d-inline-block fw-bold btn-plus-count"
                      type="button"
                      onClick={handleIncrease}
                    >
                      +
                    </span>
                  </span>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <button className="btn btn-danger py-2 rounded-0 btn-add-to-cart text-uppercase mx-3" onClick={handleAdd}>
                    Thêm vào giỏ hàng
                  </button>
                  <Link to="/thanh-toan">
                    <button className="btn btn-dark py-2 rounded-0 text-uppercase mx-3">
                      Tiến hành thanh toán
                    </button>
                  </Link>
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
                        <p className="text-uppercase fw-bold">
                          BẢO HÀNH ĐỔI TRẢ
                        </p>
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
                          Sản phẩm còn phải có đầy đủ tem, hộp của nhà sản xuất
                          & và tem bảo hành
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
                            Giữ chai xịt cách cơ thể khoảng 12cm đến 15cm và
                            hướng đầu vòi xịt về mình. Nếu nước hoa làm ướt da
                            thì nghĩa là bạn đang xịt ở khoảng cách quá gần. Chờ
                            "điểm mạch" khô tự nhiên mà không chà xát(thói quen
                            này làm bay mùi và biến mùi nước hoa)
                          </li>
                          <li>
                            Xịt nước hoa vào các điểm mạch đập(cổ, ngực, các
                            điểm mạch, cẳng tay hoặc khuỷu tay): đây là những
                            vùng có mạch máu nằm gần bề mặt da. Các điểm này ấm
                            hơn những nơi khác, hơi ấm giúp khuếch tán mùi hương
                            tốt.
                          </li>
                          <li>
                            Nước hoa ban đêm thường được xịt lên cổ hoặc gần
                            vùng cổ. Lý do là vì hương nước hoa ban đêm không
                            lưu lại lâu
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
                  Nước hoa CHROME được AZZARO tung ra vào năm 1996. AZZARO
                  CHROME là một hương thơm nam tính say đắm với cam bergamot,
                  hoa oải hương và gừng. Được làm giàu với bạch đậu khấu, gỗ đàn
                  hương, gỗ hồng sắc, cây thường xuân, gỗ sồi và dầu hoa cam,
                  loại nước hoa này chắc chắn sẽ đánh lừa các giác quan. Kết hợp
                  AZZARO CHROME với sau cạo râu để có mùi hương lâu dài. Hương
                  thơm này được khuyến khích sử dụng vào ban ngày.
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
