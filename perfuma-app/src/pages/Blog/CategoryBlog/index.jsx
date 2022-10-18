import React from 'react'
import menuThumbnailBlog from '../../../assets/img/blog1.webp'
import {Link} from 'react-router-dom'
function CategoryBlog() {
  return (
    <>
    <div className="col-md-4">
          <h4 className="title-heading text-uppercase mb-3">
            Danh mục
          </h4>
          <div className="menu-blog border-bottom">
            <Link to="/nuoc-hoa-nu">
              <p className="sub-title text-uppercase">
                Nước hoa nam
              </p>
            </Link>
            <Link to="/nuoc-hoa-nam">
              <p className="sub-title text-uppercase">
                Nước hoa nữ
              </p>
            </Link>
            <Link to="/khuyen-mai">
              <p className="sub-title text-uppercase">
                Khuyến mãi
              </p>
            </Link>
            <Link to="#">
              <p className="sub-title text-uppercase">
                Bộ quà tặng
              </p>
            </Link>
          </div>
          <h4 className="title-heading text-uppercase mt-3">Tin nổi bật</h4>
          <div className="menu-thumbnail-blog">
            <a href="./blog-details.html">
              <div className="card-blog-thumbnail border d-lg-flex mb-3">
                <div className="image-blog">
                  <img src={menuThumbnailBlog} className="img-fluid" alt=""/>
                </div>
                <div className="blog-info">
                  <p className="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p className="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <a href="./blog-details.html">
              <div className="card-blog-thumbnail border d-lg-flex mb-3">
                <div className="image-blog">
                  <img src={menuThumbnailBlog} className="img-fluid" alt=""/>
                </div>
                <div className="blog-info">
                  <p className="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p className="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <a href="./blog-details.html">
              <div className="card-blog-thumbnail border d-lg-flex mb-3">
                <div className="image-blog">
                  <img src={menuThumbnailBlog} className="img-fluid" alt=""/>
                </div>
                <div className="blog-info">
                  <p className="detail">John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam tính, bạn muốn thử?</p>
                  <p className="time-blog">
                    03/07/2022
                  </p>
                </div>
              </div>
            </a>
            <p className="btn-more text-center">Xem thêm <span><i className="fa-solid fa-angles-right"></i></span></p>
          </div>
        </div>
    </>
  )
}

export default CategoryBlog