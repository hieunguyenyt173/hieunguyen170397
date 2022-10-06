import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3 pb-4">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sản phẩm yêu thích
            </li>
          </ol>
        </nav>
        <p className="title text-uppercase">Liên hệ</p>
        <div className="contact-info">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo text-decoration-underline">Perfuma</div>
              <p className="contact-desc mt-3">
                Perfuma được thành lập vào năm 2017, hiện đang là nhà phân phối
                chính hãng của các nhãn hàng lớn như Versace, Creed, Salvatore
                Ferragamo, Carolina Herrera, Jean Paul Gaultier v..v Tại
                Hieushop, tất cả sản phẩm đều là hàng chính hãng và khách hàng
                sẽ được hậu mãi ở mức cao nhất.
              </p>
              <p className="subtile text-uppercase">Cửa hàng chính</p>
              <div className="address d-flex">
                <span className="me-2">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p>77 Điện Biên Phủ, P. 6, Thành phố Trà Vinh, Trà Vinh</p>
              </div>
              <div className="phone d-flex">
                <span className="me-2">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>123456789</p>
              </div>
              <div className="mail d-flex">
                <span className="me-2 mb-3">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                abc@gmail.com
              </div>
            </div>
            <div className="col-sm-6">
              <div className="ggmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.013822721438!2d106.33913221474172!3d9.93280639289726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a01756c537e181%3A0x2e17715eda2418dc!2zNzcgxJBp4buHbiBCacOqbiBQaOG7pywgUGjGsOG7nW5nIDMsIFRyw6AgVmluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1660191546747!5m2!1svi!2s"></iframe>
              </div>
            </div>
            <p className="title text-uppercase text-center mt-3 pt-3 border-top">
              Gửi tin nhắn cho chúng tôi
            </p>
            <div className="layout-form-contact text-center mx-auto">
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
                <label htmlFor="floatingName">Tên của bạn</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label htmlFor="floatingTextarea2">Ghi chú</label>
              </div>
              <div className="btn btn-danger mb-5">Gửi liên hệ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
