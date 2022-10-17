import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register">
        <div class="col-12">
                  <div class="infomation pb-4">
                    <p class="title text-uppercase text-center mb-4">Tạo tài khoản</p>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="registerName" placeholder="name"/>
                      <label for="registerName">Tên tài khoản</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="registerEmail" placeholder="name@example.com"/>
                      <label for="registerEmail">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="registerPassword" placeholder="Password"/>
                      <label for="registerPassword">Mật khẩu</label>
                    </div>


                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="confirmPassword" placeholder="Password"/>
                      <label for="confirmPassword">Xác nhận lại mật khẩu</label>
                    </div>

                    <div type="button" class="btn-create text-uppercase text-center box-login mb-3">
                      Đăng kí
                    </div>
                    <p class="subtitle text-center mb-2">Bạn đã có tài khoản?</p>
                    <Link to="/login">
                    <div type="button" class=" btn-login text-uppercase text-center box-login mb-3">
                      Đăng nhập
                    </div>
                    </Link>
                  </div>
                </div>
    </div>
  )
}

export default Register