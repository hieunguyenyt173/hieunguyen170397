import React from 'react'

function Subcribe() {
  return (
    <div id="subcribe">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="banner-subcribe">
            <div className="subcribe-info">
              <h4 className="text-center mb-5">Đăng kí để nhận được thông tin ưu đãi và khuyến mại sớm nhất</h4>
              <div className="form-subcribe d-flex mx-3">
                <input className="form-control form-control-lg" type="text" placeholder="Nhập email của bạn"
                  aria-label="Nhập email của bạn"/>
                <button className="btn-subcribe" type="submit">SUBCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Subcribe