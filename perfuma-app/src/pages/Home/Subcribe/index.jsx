import React, { useState } from 'react'

function Subcribe() {
  const [ value, setValue] = useState("")
  const handleSubcribe = () => {
    if(!value) {
      alert("Email không được bỏ trống")
      return
    }
    alert("Đăng kí thành công !.Chúc quý khách 1 ngày mới vui vẻ")
    setValue("")
  }
  return (
    <div id="subcribe">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="banner-subcribe">
            <div className="subcribe-info">
              <h4 className="text-center mb-5">Đăng kí để nhận được thông tin ưu đãi và khuyến mại sớm nhất</h4>
              <div className="form-subcribe d-flex mx-3">
                <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control form-control-lg" type="text" placeholder="Nhập email của bạn"
                  aria-label="Nhập email của bạn"/>
                <button className="btn-subcribe" type="submit" onClick={(e) => handleSubcribe()}>SUBCRIBE</button> 
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