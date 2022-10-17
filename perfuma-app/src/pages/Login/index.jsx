import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="popup-login">
        <div className="row">
          <div className="col-12">
            <div className="infomation pb-4">
              <p className="title text-uppercase text-center mb-4">
                Vui lòng đăng nhập
              </p>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="loginEmail">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Password"
                />
                <label htmlFor="loginPassword">Mật khẩu</label>
              </div>
              <p className="subtitle text-end mb-3 mt-2">Quên mật khẩu?</p>
              <div className="btn-login text-uppercase text-center box-login mb-2">
                Đăng nhập
              </div>
              <p className="subtitle text-center mb-3">Bạn chưa có tài khoản?</p>

              <Link to="/register">
              <div className="btn-create text-uppercase text-center box-login mb-2">
                Đăng kí
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
