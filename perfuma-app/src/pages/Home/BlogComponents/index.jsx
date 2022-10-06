import React from "react";

function BlogComponent() {
  return (
    <div id="blog">
      <div className="container">
        <h3 className="title-blog text-center text-uppercase fs-4 mt-5">Tin tức</h3>
        <p className="text-center">Cập nhật những thông tin mới nhất về nước hoa</p>
        <div className="row">
          <div className="col-lg-6">
            <a href="./blog-details.html">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./img/blog1.webp"
                      className="img-fluid rounded-start"
                      alt="anh blog"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p>
                        John Varvatos XX Artisan- Một mùi hương khô - ấm đầy nam
                        tính, bạn muốn thử?
                      </p>
                      <p className="time-blog">
                        03/07/2022 | Viết bởi: Blanc Perfume
                      </p>
                      <p className="posts">
                        Link mua: John Varvatos XX Artisan Men EDT Người ta đã
                        luôn quá quen với những...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="./blog-details.html">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/medium/100/335/381/articles/8f4640737e7ebd20e46f.jpg?v=1655952856117"
                      className="img-fluid rounded-start"
                      alt="anh blog"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p>
                        El Ganso Collection - Những chàng Tây Ban Nha thanh
                        lịch.
                      </p>
                      <p className="time-blog">
                        03/07/2022 | Viết bởi: Blanc Perfume
                      </p>
                      <p className="posts">
                        El Ganso trong mắt giới mộ điệu là sự giao thoa giữa rất
                        nhiều vẻ đẹp, khi những sản phẩm đầu tiên ra mắt chỉ
                        cách đây 2 năm,..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <a href="./blog.html">
          <div className="btn-more text-center">
            Xem thêm
            <span className="icon-more">
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogComponent;
