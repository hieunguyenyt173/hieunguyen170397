import React, { useContext } from 'react'
import ListProducts from '../../../components/ListProducts'
import Context from '../../../context/Context'

function BestSeller() {
  const {bestSeller} = useContext(Context)
  return (
    <div id="best-seller">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="heading-best-seller mt-5">
            <h3 className="text-center text-uppercase fs-4">Sản phẩm bán chạy</h3>
            <p className="text-center">Khám phá những loại nước hoa bán chạy nhất mọi thời đại</p>
            <div className="btn-more text-end">Xem thêm
              <span className="icon-more"><i className="fa-solid fa-angles-right"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-bestseller">
            <ListProducts listproduct={bestSeller}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BestSeller