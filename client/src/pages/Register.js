import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
function Register() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isLogin) Navigate("/");
  }, [auth.isLogin]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");

  const user = { username, email, password, Phone };
  const registerhandler = (e) => {
    dispatch(registerUser(user));
  };
  return (
    <div>
      <div className="container">
        <div>
          <h2>Register</h2>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              value={auth.isLoding ? "pending..." : " signUp"}
              onClick={(e) => registerhandler(e)}
            ></button>
          </div>

          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
