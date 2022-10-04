import React from 'react'

function Footer() {
  return (
    <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="logo text-decoration-underline my-3">Perfuma</div>
          <a href="#">
            <p>GPKD số: 58A8011955</p>
          </a>
          <a href="#">
            <p>Ngày cấp: 01/10/2021</p>
          </a>
          <a href="#">
            <p>Cấp bởi: UBND TP Trà Vinh</p>
          </a>
          <a href="#">
            <p>Đ/c: 77 Điện Biên Phủ, P.6, Trà Vinh</p>
          </a>
          <a href="#">
            <p>Sđt : 0966434787</p>
          </a>
          <a href="#">
            <p>Email: support@hieushop.com.vn</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="title-footer mt-5">HÕ TRỢ KHÁCH HÀNG</p>
          <a href="#">
            <p>Chính sách bảo mật</p>
          </a>
          <a href="#">
            <p>Chính sách vận chuyển</p>
          </a>
          <a href="#">
            <p>Chính sách đổi trả</p>
          </a>
          <a href="#">
            <p>Hình thức thanh toán</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="title-footer mt-5">HƯỚNG DẪN</p>
          <a href="#">
            <p>Hướng dẫn mua hàng</p>
          </a>
          <a href="#">
            <p>Hướng dẫn thanh toán</p>
          </a>
          <a href="#">
            <p>Hướng dẫn giao nhận</p>
          </a>
          <a href="#">
            <p>Điều khoản dịch vụ</p>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 pb-4">
          <p className="title-footer mt-5">KẾT NỐI VỚI CHÚNG TÔI</p>
          <div className="icon-footer d-flex">
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-facebook"></i></span></a>
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-instagram"></i></span></a>
            <a href="#"><span className="social-icon fs-3 mx-2"><i className="fa-brands fa-twitter"></i></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;