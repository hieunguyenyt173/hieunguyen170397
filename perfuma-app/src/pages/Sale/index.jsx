import React from 'react'
import Category from '../../components/Category'
import ListProductComponent from '../../components/ListProductComponent'
import {Link} from 'react-router-dom'
function Sale() {
  return (
    <div id="product">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-3">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Khuyến mãi
            </li>
          </ol>
        </nav>
        <div className="row">
          <h3 className="text-uppercase mt-md-4">Khuyến mãi</h3>
          <Category />
          <ListProductComponent />
        </div>
      </div>
    </div>
  )
}

export default Sale