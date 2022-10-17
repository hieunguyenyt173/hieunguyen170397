import React from 'react'
import img from '../../../assets/img/login.png'
function ListProductCheckout() {
  return (
    <>
    <div class="col-md-6">
          <div class="checkout-info mb-5">
            <p class="text-uppercase title-checkout">Đơn hàng(<span class="amount-product"> 2 </span>Sản phẩm)</p>
            <div class="list-product border-top border-bottom">
              <div class="row">
                <div class="col-md-12">
                  <div class="item-checkout d-flex">
                    <div class="image-product">
                      <div class="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div class="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div class="product-name-checkout px-3">
                      <p class="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p class="mil mb-2">50ml</p>
  
                    </div>
                    <p class="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div class="item-checkout d-flex">
                    <div class="image-product">
                      <div class="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div class="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div class="product-name-checkout px-3">
                      <p class="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p class="mil mb-2">50ml</p>
  
                    </div>
                    <p class="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div class="item-checkout d-flex">
                    <div class="image-product">
                      <div class="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div class="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div class="product-name-checkout px-3">
                      <p class="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p class="mil mb-2">50ml</p>
  
                    </div>
                    <p class="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                  <div class="item-checkout d-flex">
                    <div class="image-product">
                      <div class="product-thumbnail-wrapper">
                        <img src={img} alt=""/>
                        <div class="product-thumbnail-quantity text-center">1</div>
                      </div>
  
                    </div>
                    <div class="product-name-checkout px-3">
                      <p class="product-name-checkout">Azzaro Chrome For Men By Azzaro Eau De Toilette Spray</p>
                      <p class="mil mb-2">50ml</p>
  
                    </div>
                    <p class="price d-flex align-items-center my-0">2.390.000₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-discount my-3 d-flex">
                  <div class="discount-input pe-2">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="floatingDiscount" placeholder="Discount" />
                      <label for="floatingDiscount">Mã giảm giá</label>
                    </div>
                  </div>
                  <div class="btn btn-dark d-flex justify-content-center align-items-center" type="submit">Áp dụng</div>
             
            </div>
            <div class="checkout-money border-top pt-3">
              <div class="sub-total d-flex justify-content-between">
                <p>Tạm tính</p>
                <p class="sub-total-money">6.380.000₫</p>
              </div>
              <div class="shipping d-flex justify-content-between">
                <p>Phí vận chuyển</p>
                <p class="shipping-money">0</p>
              </div>
              <div class="total border-top pt-3 d-flex justify-content-between">
                <p class="">Thành tiền</p>
                <p class="total-money">6.380.000₫</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="btn-oder oder-desktop text-uppercase">Đặt hàng</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ListProductCheckout