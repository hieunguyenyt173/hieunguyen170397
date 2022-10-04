import React from "react";

function NotFound() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center flex-column my-5">
      <h1 className="text-dark fw-normal mb-5">Không tìm thấy nội dung yêu cầu</h1>
      <a href="./index.html" className="btn btn-dark py-2 rounded-0">
        Quay lại trang chủ
      </a>
    </div>
  );
}

export default NotFound;
