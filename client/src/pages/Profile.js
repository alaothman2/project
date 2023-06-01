import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateProfile from "./UpdateProfile";

function Profile() {
  const [isUpdate,setIsUpdate] = useState(false);
  console.log(isUpdate)
  const auth = useSelector((state) => state.auth);
  return (
    <div className="container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white">
                  <img
                    src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png"
                    alt="Avatar"
                    className="img-fluid my-5"
                  />
                  <button
                    type="button"
                    className="btn btn-primary mb-5"
                    onClick={() =>( setIsUpdate(true))}
                  >
                    edit your profile
                  </button>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Your profile :</h6>

                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Name</h6>
                        <p className="text-muted">{auth.user.username}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>phone</h6>
                        <p className="text-muted">123 456 789</p>
                      </div>
                    </div>
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{auth.user.email}</p>
                      </div>
                    </div>
                    {isUpdate === true ? (
                      <div>
                         <UpdateProfile/>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
