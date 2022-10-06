import React from 'react'

function Services() {
  return (
    <div id="service">
    <div className="container">
      <div className="row d-flex justify-content-between mt-4">
        <div className="col-lg-3 col-md-6 col-sm-6 px-2">
          <div className="service-item d-flex flex-column justify-content-center align-items-center text-center mt-3">
            <span className="fs-3 mb-2"><i className="fa-solid fa-truck"></i></span>
            <p>Miễn phí vận chuyển trên toàn quốc</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 px-2">
          <div className="service-item d-flex flex-column justify-content-center align-items-center text-center mt-3">
            <span className="fs-3 mb-2"><i className="fa-solid fa-gem"></i></span>
            <p>100% hàng chính hãng</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 px-2">
          <div className="service-item d-flex flex-column justify-content-center align-items-center text-center mt-3">
            <span className="fs-3 mb-2"><i className="fa-solid fa-location-dot"></i></span>
            <p>Giao hàng tận nơi, thu tiền tại nhà</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 px-2">
          <div className="service-item d-flex flex-column justify-content-center align-items-center text-center mt-3">
            <span className="fs-3 mb-2"><i className="fa-solid fa-credit-card"></i></span>
            <p>Thanh toán linh hoạt</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Services