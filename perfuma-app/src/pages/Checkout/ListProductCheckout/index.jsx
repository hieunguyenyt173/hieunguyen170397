import React from 'react'
import img from '../../../assets/img/login.png'
function ListProductCheckout() {
  return (
    <>
    <div className="col-md-6">
          <div className="checkout-info mb-5">
            <p className="text-uppercase title-checkout">Đơn hàng(<span className="amount-product"> 2 </span>Sản phẩm)</p>
            <div className="list-product border-top border-bottom">
              <div className="row">
                <div className="col-md-12">
                  <div className="item-checkout d-flex">
                    <div className="image-product">
                      <div className="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div className="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div className="product-name-checkout px-3">
                      <p className="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p className="mil mb-2">50ml</p>
  
                    </div>
                    <p className="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div className="item-checkout d-flex">
                    <div className="image-product">
                      <div className="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div className="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div className="product-name-checkout px-3">
                      <p className="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p className="mil mb-2">50ml</p>
  
                    </div>
                    <p className="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div className="item-checkout d-flex">
                    <div className="image-product">
                      <div className="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div className="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div className="product-name-checkout px-3">
                      <p className="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p className="mil mb-2">50ml</p>
  
                    </div>
                    <p className="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div className="item-checkout d-flex">
                    <div className="image-product">
                      <div className="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div className="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div className="product-name-checkout px-3">
                      <p className="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p className="mil mb-2">50ml</p>
  
                    </div>
                    <p className="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-discount my-3 d-flex">
                  <div className="discount-input pe-2">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingDiscount" placeholder="Discount" />
                      <label for="floatingDiscount">Mã giảm giá</label>
                    </div>
                  </div>
                  <div className="btn btn-dark d-flex justify-content-center align-items-center" type="submit">Áp dụng</div>
             
            </div>
            <div className="checkout-money border-top pt-3">
              <div className="sub-total d-flex justify-content-between">
                <p>Tạm tính</p>
                <p className="sub-total-money">6.380.000₫</p>
              </div>
              <div className="shipping d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p className="shipping-money">0</p>
              </div>
              <div className="total border-top pt-3 d-flex justify-content-between">
                <p className="">Thành tiền</p>
                <p className="total-money">6.380.000₫</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn-oder oder-desktop text-uppercase">Đặt hàng</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ListProductCheckout