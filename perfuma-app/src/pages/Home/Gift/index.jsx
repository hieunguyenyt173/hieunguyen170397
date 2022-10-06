import React, { useContext, useState } from 'react'
import ListProducts from '../../../components/ListProducts'
import Context from '../../../context/Context'

function Gift() {
    const {giftProducts} = useContext(Context)
  return (
    <div id="gift">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="heading-best-seller mt-5">
            <h3 className="text-center text-uppercase fs-4">Bộ quà tặng</h3>
            <p className="text-center">Nhiều bộ quà tặng hấp dẫn cùng nhiều ưu đãi</p>
            <div className="btn-more text-end">Xem thêm
              <span className="icon-more"><i className="fa-solid fa-angles-right"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="listgift">
            <ListProducts listproduct={giftProducts}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gift