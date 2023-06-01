import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";

function UpdateProfile() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id =  auth.user.id
  const user = {id ,username, email, password, };
  const updatehandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(user));
  };
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 mt-5">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title text-center">update your profile </h3>
                <form >
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="username">Username:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={(e) => updatehandler(e)}>
                     Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
