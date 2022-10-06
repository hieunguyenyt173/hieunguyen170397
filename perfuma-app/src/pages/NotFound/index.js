import React from "react";
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center flex-column my-5">
      <h1 className="text-dark fw-normal mb-5">Không tìm thấy nội dung yêu cầu</h1>
      <Link to="/" className="btn btn-dark py-2 rounded-0 text-white">
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
