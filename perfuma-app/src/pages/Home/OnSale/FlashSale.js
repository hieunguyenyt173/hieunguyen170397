import React from 'react'
import flashsale from '../../../assets/img/flashsale.png'
import {Link} from 'react-router-dom'
function FlashSale() {
  return (
    <div className="row">
        <div className="col">
          <div className="flash-sale mt-5 mb-2 d-flex justify-content-between align-items-center">
            <div className="time-sale">
              <div className="timer text-center d-flex align-items-center">
                <div className="image-flashsale">
                  <img src={flashsale} alt="flashsale"/>
                </div>
                <div className="sale-timer"><span id="hours">12</span></div>
                <div className="sale-timer"><span id="minutes">12</span></div>
                <div className="sale-timer"><span id="seconds">12</span></div>
              </div>
            </div>
            <Link to="/khuyen-mai">
              <div className="btn-more">Xem thêm
                <span className="icon-more"><i className="fa-solid fa-angles-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default FlashSale