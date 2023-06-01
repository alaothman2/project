import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";

function Login() {
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
      <div className="container">
        <div className="login">
          <h2>login</h2>
          <div className="form-outline mb-4">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <Link to="/forget">Forget Password</Link>
            </div>
            <div class="col">
              <Link to="/register ">Register </Link>
            </div>
          </div>
          <div className="inputBx">
            <button
              type="button"
              class="btn btn-primary btn-block mb-4"
              onClick={(e) => registerhandler(e)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
