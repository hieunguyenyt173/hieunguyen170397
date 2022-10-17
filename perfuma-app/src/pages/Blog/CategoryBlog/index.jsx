import React from 'react'
import menuThumbnailBlog from '../../../assets/img/blog1.webp'
function CategoryBlog() {
  return (
    <>
    <div class="col-md-4">
          <h4 class="title-heading text-uppercase mb-3">
            Danh mục
          </h4>
          <div class="menu-blog border-bottom">
            <a href="./product.html">
              <p class="sub-title text-uppercase">
                Nước hoa nam
              </p>
            </a>
            <a href="./product-women.html">
              <p class="sub-title text-uppercase">
                Nước hoa nữ
              </p>
            </a>
            <a href="./sale.html">
              <p class="sub-title text-uppercase">
                Khuyến mãi
              </p>
            </a>
            <a href="#">
              <p class="sub-title text-uppercase">
                Bán chạy
              </p>
            </a>
          </div>
          <h4 class="title-heading text-uppercase mt-3">Tin nổi bật</h4>
          <div class="menu-thumbnail-blog">
            <a href="./blog-details.html">
              <div class="card-blog-thumbnail border d-lg-flex mb-3">
                <div class="image-blog">
                  <img src={menuThumbnailBlog} class="img-fluid" alt=""/>
                </div>
                <div class="blog-info">
                  <p class="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p class="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <a href="./blog-details.html">
              <div class="card-blog-thumbnail border d-lg-flex mb-3">
                <div class="image-blog">
                  <img src={menuThumbnailBlog} class="img-fluid" alt=""/>
                </div>
                <div class="blog-info">
                  <p class="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p class="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <a href="./blog-details.html">
              <div class="card-blog-thumbnail border d-lg-flex mb-3">
                <div class="image-blog">
                  <img src={menuThumbnailBlog} class="img-fluid" alt=""/>
                </div>
                <div class="blog-info">
                  <p class="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p class="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <p class="btn-more text-center">Xem thêm <span><i class="fa-solid fa-angles-right"></i></span></p>
          </div>
        </div>
    </>
  )
}

export default CategoryBlog