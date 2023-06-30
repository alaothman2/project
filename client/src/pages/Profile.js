import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { BiUserCircle } from "react-icons/bi";
import { updateUser } from "../redux/slices/authSlice";
import "../css/Profile.css";
function Profile() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
 

  const id = auth.user?._id;
  const user = { id, username, email, password,birthday,Phone };
  const updatehandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(user));
  };
  return (
    <div className="profil-back">
      <section className="py-5 my-5">
        <div className="container">
          <h1 className="mb-5">Account Settings</h1>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <h1 className="text-center ">
                  <BiUserCircle />
                </h1>
                <h4 className="text-center font">{auth.user?.username}</h4>
                <h2 className="text-center font">{auth.user?.email}</h2>
                <h2 className="text-center font">{auth.user?.Phone}</h2>
                <h2 className="text-center font">{auth.user?.birthday}</h2>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 className="mb-4">Account Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone number</label>
                      <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)}  />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Birthday</label>
                      <input type="text" className="form-control" onChange={(e) => setBirthday(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>password </label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm password </label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    <div>
                      <button
                        className="profilbtn"
                        onClick={(e) => updatehandler(e)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
