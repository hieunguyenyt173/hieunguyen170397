import React from 'react'
import loginImage from '../../assets/img/login.png'
function Login() {
  return (
    <div className="login">
      <div class="popup-login">
              <div class="row">
                <div class="col-12">
                  <div class="infomation pb-4">
                    <p class="title text-uppercase text-center mb-4">Vui lòng đăng nhập</p>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com"/>
                      <label for="loginEmail">Email</label>
                    </div>
                    <div class="form-floating">
                      <input type="password" class="form-control" id="loginPassword" placeholder="Password"/>
                      <label for="loginPassword">Mật khẩu</label>
                    </div>
                    <p class="subtitle text-end mb-3 mt-2">Quên mật khẩu?</p>
                    <div class="btn-login text-uppercase text-center box-login mb-2">
                      Đăng nhập
                    </div>
                    <p class="subtitle text-center mb-3">Bạn chưa có tài khoản?</p>

                    <div class="btn-create text-uppercase text-center box-login mb-2">
                      Đăng kí
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Login