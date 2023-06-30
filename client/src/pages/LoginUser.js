import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";
import imgback2 from "../images/bg_banner.jpg";
import "../css/login.css";
function LoginUser() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isLogin) navigate("/");
  }, [auth.isLogin]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = { email, password };
  const registerhandler = (e) => {
    dispatch(loginUser(user));
  };
  return (
    <div>
      <div class="login">
        <div class="container main2">
          <div class="row row-style">
            <div class="col-md-6 side-image"></div>
            <div class="col-md-6 right">
              <div class="input-box">
                <header>log in </header>
                <div class="input-field">
                  <input
                    type="text"
                    class="input-log"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <input
                    type="password"
                    class="input-log"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label for="password">Password</label>
                </div>
                <div class="input-field">
                  <button
                    type="button"
                    class="submit"
                    onClick={(e) => registerhandler(e)}
                  >
                    Sign in
                  </button>
                 {
                  auth.isError ?  <p className="alert alert-danger forget-err mb-2">{auth.message}</p>: null
                 }
                </div>
                <div class="signin">
                  <span>
                    <div class="row mb-4">
                      <div class="col d-flex justify-content-center">
                        <Link to="/forget">Forget Password</Link>
                      </div>
                      <div class="col">
                        <Link to="/register ">Register </Link>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
