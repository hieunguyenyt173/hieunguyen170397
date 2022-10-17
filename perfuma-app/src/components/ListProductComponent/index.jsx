import React from "react";

function ListProductComponent() {
  return (
    <div className="col-md-8 menu-product">
      <div className="heading-product d-flex justify-content-between align-items-center">
        <p className="product-amount">85 sản phẩm</p>
        <div className="menu d-flex">
          <div className="menu-show d-flex align-items-center me-3">
            <p className="me-1">Hiển thị: </p>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>20 sản phẩm</option>
              <option value="12">12</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="24">24</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="menu-sort d-flex align-items-center">
            <p className="me-1">Sắp xếp theo: </p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Từ A - Z</option>
              <option value="">Từ Z - A</option>
              <option value="">Giá tăng dần</option>
              <option value="">Giá giảm dần</option>
              <option value="">Hàng mới nhất</option>
              <option value="">Hàng cũ nhất</option>
            </select>
          </div>
        </div>
      </div>
      <div className="filter-option d-flex mt-3">
        <p>
          Nam{" "}
          <button type="button" className="btn-close" aria-label="Close"></button>
        </p>
        <p>
          Trên 3.000.000đ{" "}
          <button type="button" className="btn-close" aria-label="Close"></button>
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Eternity-Aqua-Mens-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main_1024x1024.jpg?v=1579124114"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/I0101891larger_1024x1024.jpg?v=1623934516"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/W-3092larger_1024x1024.jpg?v=1579127935"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/W-3092larger_1024x1024.jpg?v=1579127935"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Touch-Women-Eau-de-Parfume-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1580148163"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/I0097512larger_086313b8-c4eb-4ab6-a563-ef5ce5612758_1024x1024.jpg?v=1617654601"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/W-1314larger_1024x1024.jpg?v=1617046171"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-The-Dreamer-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1598971735"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-6">
          <div className="item shadow mb-3 bg-body rounded me-0">
            <div className="row">
              <div className="col">
                <div className="image-product">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579123544"
                    alt="anh san pham"
                  />
                  <div className="btn-view mx-auto d-flex justify-content-center align-items-center">
                    <p className="my-0">Xem nhanh</p>
                  </div>
                  <div className="saleoff d-flex align-item-center text-white text-center">
                    <p className="">Sale 45%</p>
                  </div>
                  <div className="like">
                    <span className="like-icon fs-4">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-info">
                  <p className="product-brand">Azzaro</p>
                  <p className="product-name">
                    Azzaro Chrome For Men By Azzaro Eau De Toilette Spray
                  </p>
                  <div className="product-price d-flex justify-content-between">
                    <p className="price-sale">2.390.000₫</p>
                    <p className="price text-decoration-line-through">4.125.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProductComponent;
