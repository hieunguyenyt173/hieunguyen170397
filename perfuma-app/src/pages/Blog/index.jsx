import React from "react";
import BlogItem from "./BlogItem";
import CategoryBlog from "./CategoryBlog";

function Blog() {
  return (
    <div id="blog">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3 pb-4">
            <li className="breadcrumb-item">
              <a href="./index.html">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tin tức
            </li>
          </ol>
        </nav>
        <div className="row">
          <CategoryBlog />
          <BlogItem />
        </div>
      </div>
    </div>
  );
}

export default Blog;
