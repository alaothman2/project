import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import "../css/register.css"
function RegisterUser() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isLogin) Navigate("/");
  }, [auth.isLogin]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const user = { username, email, password ,Phone,birthday};
  const navigate = useNavigate();
  console.log(user)
  const registerhandler = (e) => {
    dispatch(registerUser(user));
  };
  useEffect(() => {
    if (auth.isLogin) navigate("/");
  }, [auth.isLogin]);
  return (
    <div>
      <div class="signUp">
        <div class="container main2">
          <div class="row row-style">
            <div class="col-md-6 side-imageSignUp"></div>
            <div class="col-md-6 right">
              <div class="input-box">
                <header>Sign UP </header>
                <div className="d-flex">
                  <div class="input-field">
                    <input
                      type="text"
                      class="input-log"
                      id="Username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label for="Usernamel">Username</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="email"
                      class="input-log"
                      id="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="Email">Email </label>
                  </div>
                </div>
                <div className="d-flex">
                  <div class="input-field">
                    <input
                      type="text"
                      class="input-log"
                      id="birthday"
                      
                      required
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                    <label for="birthday">Birthday</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="text"
                      class="input-log"
                      id="phone"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label for="phone">Phone Number</label>
                  </div>
                </div>

                <div class="input-field">
                  <input type="Password" class="input-log" id="Password" required />
                  <label for="Password">Password</label>
                </div>
                <div class="input-field">
                  <input
                    type="password"
                    class="input-log"
                    id="passwordRepeted"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label for="passwordRepeted">Confirm Your Password</label>
                </div>
                <div class="input-field">
                  <button
                    type="button"
                    class="submit"
                    onClick={(e) => registerhandler(e)}
                  >
                    Sign UP
                  </button>
                </div>
                <div class="signin">
                  <span>
                    <div class="col d-flex justify-content-start ">
                      <Link to="/login">Login</Link>
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

export default RegisterUser;
